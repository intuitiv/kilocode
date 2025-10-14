import { keyframes } from 'styled-components';

export const codeFlow = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const pulse = (color) => keyframes`
  0% { box-shadow: 0 0 0 0 ${color}; }
  70% { box-shadow: 0 0 0 10px rgba(204,169,44, 0); }
  100% { box-shadow: 0 0 0 0 rgba(204,169,44, 0); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const flicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;