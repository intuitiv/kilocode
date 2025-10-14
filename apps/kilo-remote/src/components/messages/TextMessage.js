import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { useTheme } from '../../hooks/useTheme';
import { getTextMessageStyles } from '../../styles/messages';
import { getRandomVariant } from '../../utils/style-utils';
import { messageStyles } from '../../styles/messages';

const TextMessage = ({ text, sender }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => getTextMessageStyles(theme), [theme]);

  const kiloGreeting = useMemo(() => {
    if (sender === 'user') {
      return null;
    }
    return getRandomVariant(messageStyles.kiloSpeaks.variants);
  }, [sender]);

  return (
    <View>
      {kiloGreeting && <Text style={styles.kiloGreeting}>{kiloGreeting}</Text>}
      <Markdown style={sender === 'user' ? styles.userMessage : styles.kiloMessage}>
        {text}
      </Markdown>
    </View>
  );
};

export default TextMessage;