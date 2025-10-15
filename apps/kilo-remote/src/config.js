let serverUrl = 'http://localhost:3000';
let workspacePath = '';

export const getServerUrl = () => serverUrl;

export const setServerUrl = (url) => {
  serverUrl = url;
};

export const getWorkspacePath = () => workspacePath;

export const setWorkspacePath = (path) => {
  workspacePath = path;
};

let activeWorkspace = '';

export const getActiveWorkspace = () => activeWorkspace;

export const setActiveWorkspace = (workspace) => {
  activeWorkspace = workspace;
};

export const config = {
  animation: {
    name: 'matrix', // 'bubbles', 'code-flow', or 'matrix'
    bubbles: {
      shape: 'circle',
      count: 5,
      size: 200,
      color: 'rgba(0, 122, 255, 0.5)',
    },
    'code-flow': {
      shape: 'square',
      count: 10,
      size: 100,
      color: 'rgba(0, 255, 122, 0.5)',
    },
    matrix: {
      fontSize: 12,
      color: 'rgba(0, 255, 0, 0.8)',
    },
  },
};