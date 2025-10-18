import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { getKiloSaidMessageStyles } from '../../styles';
import MessageCard from './MessageCard';

const KiloSaidMessage = ({ item }) => {
  const { theme, isVerbose, expandedMessageId, setExpandedMessageId } = useTheme();
  const isExpanded = expandedMessageId === item.ts;
  const styles = getKiloSaidMessageStyles(theme);

  const handlePress = () => {
    setExpandedMessageId(isExpanded ? null : item.ts);
  };

  if (!isVerbose) {
    return (
      <TouchableWithoutFeedback onPress={() => { /* Stop propagation */ }}>
        <MessageCard>
          <TouchableOpacity onPress={handlePress}>
            <View style={!isExpanded && { maxHeight: 65, overflow: 'hidden' }}>
              <Markdown
                style={{
                  body: styles.body,
                  code_inline: styles.code_inline,
                  paragraph: { margin: 0, marginBottom: 4, marginTop: 4 },
                }}
              >
                {item.text}
              </Markdown>
            </View>
          </TouchableOpacity>
        </MessageCard>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <MessageCard
      headerIcon={<Feather name="message-circle" size={18} style={styles.icon} />}
      headerText="Kilo said:"
    >
      <Markdown
        style={{
          body: styles.body,
          code_inline: styles.code_inline,
          paragraph: { margin: 0, marginBottom: 4, marginTop: 4},
        }}
      >
        {item.text}
      </Markdown>
    </MessageCard>
  );
};

export default KiloSaidMessage;
