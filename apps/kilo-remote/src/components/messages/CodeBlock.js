import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { useTheme } from '../../hooks/useTheme';

const CodeBlock = ({ language, code }) => {
  const { theme } = useTheme();

  const codeStyle = {
    'code[class*="language-"]': {
      color: theme.primaryText,
      background: 'none',
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      fontSize: 14,
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: 1.5,
      tabSize: 4,
      hyphens: 'none',
    },
    'pre[class*="language-"]': {
      color: theme.primaryText,
      background: theme.codeBlocks || '#2d2d2d',
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      fontSize: 14,
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: 1.5,
      tabSize: 4,
      hyphens: 'none',
      padding: 10,
      margin: 5,
      overflow: 'auto',
      borderRadius: 5,
    },
    ':not(pre) > code[class*="language-"]': {
      background: theme.codeBlocks || '#2d2d2d',
      padding: '.1em',
      borderRadius: '.3em',
      whiteSpace: 'normal',
    },
    comment: {
      color: '#999',
    },
    'block-comment': {
      color: '#999',
    },
    string: {
      color: theme.success || '#7ec699',
    },
    keyword: {
      color: theme.accent || '#cc99cd',
    },
    number: {
      color: theme.commandHighlight || '#f08d49',
    },
    function: {
      color: theme.secondaryText || '#67cdcc',
    },
    'class-name': {
      color: theme.commandHighlight || '#f08d49',
    },
    punctuation: {
      color: theme.primaryText,
    },
  };

  return (
    <SyntaxHighlighter language={language} style={codeStyle}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;