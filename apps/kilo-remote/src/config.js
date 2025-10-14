let serverUrl = 'http://localhost:3000';
let workspacePath = '';

export const setServerUrl = (url) => {
  serverUrl = url;
};

export const getServerUrl = () => {
  return serverUrl;
};

export const setWorkspacePath = (path) => {
  workspacePath = path;
};

export const getWorkspacePath = () => {
  return workspacePath;
};

export const getActiveWorkspace = () => {
  return workspacePath;
};