import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

const CodeBlock = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;