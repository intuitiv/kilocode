const BASE_URL = 'http://localhost:3000';

const stream = async (url, body, onMessage, onError, onComplete, onTaskId) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let eventType = null;

    const read = async () => {
      const { done, value } = await reader.read();
      if (done) {
        if (onComplete) onComplete();
        return;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop(); // Keep the last, possibly incomplete line

      for (const line of lines) {
        if (line.startsWith('event:')) {
          eventType = line.substring(6).trim();
        } else if (line.startsWith('data:')) {
          const data = line.substring(5).trim();
          if (data) {
            if (eventType === 'taskId') {
              const taskId = JSON.parse(data).taskId;
              if (onTaskId) {
                onTaskId(taskId);
              }
            } else {
              onMessage(JSON.parse(data));
            }
          }
        } else if (line === '') {
          // End of event
          eventType = null;
        }
      }
      read();
    };

    read();
  } catch (error) {
    console.error('Error streaming messages:', error);
    if (onError) onError(error);
  }
};

export const startNewTask = (message, onMessage, onError, onComplete, onTaskId) => {
  const url = `${BASE_URL}/new-task`;
  const body = { message };
  stream(url, body, onMessage, onError, onComplete, onTaskId);
};

export const sendFollowup = (taskId, message, onMessage, onError, onComplete) => {
  if (!taskId) {
    console.error('No task ID available to send a followup.');
    return;
  }
  const url = `${BASE_URL}/send-followup`;
  const body = { taskId, message };
  stream(url, body, onMessage, onError, onComplete);
};

export const cancelTask = async (taskId) => {
  if (taskId) {
    try {
      await fetch(`${BASE_URL}/cancel-task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId }),
      });
    } catch (error) {
      console.error('Error cancelling task:', error);
    }
  }
};

export const getTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

export const getTaskHistory = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching task history:', error);
    return null;
  }
};

export const getModes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/modes`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching modes:', error);
    return [];
  }
};

export const getCurrentMode = async (id) => {
  if (!id) return null;
  try {
    const response = await fetch(`${BASE_URL}/current-mode/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching current mode:', error);
    return null;
  }
};