import React from 'react';
import Markdown from 'react-native-markdown-display';

const TextMessage = ({ text }) => {
  return (
    <Markdown
      style={{
        code_inline: {
          backgroundColor: '#f0f0f0',
          padding: 2,
          borderRadius: 4,
        },
      }}
    >
      {text}
    </Markdown>
  );
};

export default TextMessage;