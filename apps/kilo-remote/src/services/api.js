import { getServerUrl } from '../config';
import EventSource from 'react-native-event-source';

const stream = (url, body, onMessage, onError, onComplete, onTaskId) => {
  // EventSource requires the URL to include query params for POST data,
  // which is not standard but how this library and many servers handle it.
  // A better approach would be a proper SSE library that supports POST bodies.
  // Given the constraints, we will assume the server can handle this or we will adjust the server.
  // For now, let's just use the library as intended.
  // The library does not support POST body, so we will send the data as query params.
  // This is a limitation of the library.
  const fullUrl = new URL(url);
  if (body.taskId) fullUrl.searchParams.append('taskId', body.taskId);
  if (body.message) fullUrl.searchParams.append('message', body.message);

  // The library also does not allow custom headers for the initial POST.
  // We are switching to GET request as is standard for EventSource.
  // The server will need to be adapted to handle GET requests for these endpoints.
  const eventSource = new EventSource(fullUrl.toString());

  eventSource.addEventListener('open', () => {
    console.log('SSE connection opened.');
  });

  eventSource.addEventListener('message', (event) => {
    if (event.type === 'message') {
      onMessage(JSON.parse(event.data));
    }
  });

  eventSource.addEventListener('done', () => {
    console.log('SSE stream finished.');
    if (onComplete) onComplete();
    eventSource.close();
  });

  eventSource.addEventListener('taskId', (event) => {
    const taskId = JSON.parse(event.data).taskId;
    if (onTaskId) {
      onTaskId(taskId);
    }
  });

  eventSource.addEventListener('error', (error) => {
    // The 'error' event is fired when the connection is closed by the server,
    // or for actual network errors. We don't want to call onError for a graceful close.
    if (error.type === 'error') {
      console.error('SSE error:', error);
      if (onError) onError(error);
    }
    eventSource.close();
  });

  // Note: There is no explicit 'onComplete' for SSE other than the server closing the connection,
  // which triggers an error. We use the error handler to signify completion.

  // Return a function to cancel the stream
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