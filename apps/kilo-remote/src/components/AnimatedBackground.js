import React from 'react';
import { config } from '../config';
import BubblesBackground from './BubblesBackground';
import MatrixBackground from './MatrixBackground';

const AnimatedBackground = () => {
  const animationName = config.animation.name;

  if (animationName === 'matrix') {
    return <MatrixBackground />;
  }

  // Default to bubbles
  return <BubblesBackground />;
};

export default AnimatedBackground;