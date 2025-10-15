import React from 'react';
import { View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { getKiloSaidMessageStyles } from '../../styles';
import MessageCard from './MessageCard';

const KiloSaidMessage = ({ item }) => {
  const { theme } = useTheme();
  const styles = getKiloSaidMessageStyles(theme);

  return (
    <MessageCard
      headerIcon={<Feather name="message-circle" size={18} style={styles.icon} />}
      headerText="Kilo said:"
    >
      <Markdown
        style={{
          body: styles.body,
          code_inline: styles.code_inline,
        }}
      >
        {item.text}
      </Markdown>
    </MessageCard>
  );
};

export default KiloSaidMessage;
