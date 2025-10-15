import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { useTheme } from '../../hooks/useTheme';
import { getTextMessageStyles } from '../../styles';
import { getRandomVariant } from '../../utils/style-utils';
import { messageStyles } from '../../styles';
import MessageCard from './MessageCard';

const TextMessage = ({ text, sender }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => getTextMessageStyles(theme), [theme]);

  const kiloGreeting = useMemo(() => {
    if (sender === 'user') {
      return null;
    }
    return getRandomVariant(messageStyles.kiloSpeaks.variants);
  }, [sender]);

  if (sender === 'user') {
    return (
      <Markdown style={styles.userMessage}>
        {text}
      </Markdown>
    );
  }

  return (
    <MessageCard headerText={kiloGreeting}>
      <Markdown style={styles.kiloMessage}>
        {text}
      </Markdown>
    </MessageCard>
  );
};

export default TextMessage;