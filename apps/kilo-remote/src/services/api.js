import { getServerUrl } from '../config';
import EventSource from 'react-native-event-source';

export const stream = (url, body, onMessage, onError, onComplete, onTaskId) => {
  const fullUrl = new URL(url);
  if (body.taskId) fullUrl.searchParams.append('taskId', body.taskId);
  if (body.message) fullUrl.searchParams.append('message', body.message);

  const eventSource = new EventSource(fullUrl.toString());

  eventSource.addEventListener('open', () => {
    console.log('SSE connection opened.');
  });

  eventSource.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.type === 'stream_end') {
      console.log('SSE stream finished.');
      if (onComplete) onComplete();
      eventSource.close();
    } else {
      onMessage(message);
    }
  });

  eventSource.addEventListener('taskId', (event) => {
    const taskId = JSON.parse(event.data).taskId;
    if (onTaskId) {
      onTaskId(taskId);
    }
  });

  eventSource.addEventListener('error', (error) => {
    if (error.type === 'error') {
      console.error('SSE error:', error);
      if (onError) onError(error);
    }
    // Always close on error to prevent reconnect loops
    eventSource.close();
  });

  return () => {
    eventSource.close();
    if (onComplete) onComplete();
  };
};

export const startNewTask = (message, onMessage, onError, onComplete, onTaskId) => {
  const url = `${getServerUrl()}/new-task`;
  const body = { message };
  stream(url, body, onMessage, onError, onComplete, onTaskId);
};

export const sendFollowup = (taskId, message, onMessage, onError, onComplete) => {
  if (!taskId) {
    console.error('No task ID available to send a followup.');
    return;
  }
  const url = `${getServerUrl()}/send-followup`;
  const body = { taskId, message };
  stream(url, body, onMessage, onError, onComplete);
};

export const cancelTask = async (taskId) => {
  if (taskId) {
    try {
      await fetch(`${getServerUrl()}/cancel-task`, {
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
    const response = await fetch(`${getServerUrl()}/tasks`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

export const getTaskHistory = async (id) => {
  try {
    const response = await fetch(`${getServerUrl()}/tasks/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching task history:', error);
    return null;
  }
};

export const getModes = async () => {
  try {
    const response = await fetch(`${getServerUrl()}/modes`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching modes:', error);
    return [];
  }
};

export const getCurrentMode = async (id) => {
  if (!id) return null;
  try {
    const response = await fetch(`${getServerUrl()}/current-mode/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching current mode:', error);
    return null;
  }
};

export const setMode = async (mode) => {
  try {
    await fetch(`${getServerUrl()}/modes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mode }),
    });
  } catch (error) {
    console.error('Error setting mode:', error);
  }
};

export const checkHealth = async () => {
  try {
    const response = await fetch(`${getServerUrl()}/health`);
    return await response.json();
  } catch (error) {
    console.error('Error checking health:', error);
    return { status: 'error', workspacePath: '' };
  }
};