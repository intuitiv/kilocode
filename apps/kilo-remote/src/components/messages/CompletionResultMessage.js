import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Markdown from 'react-native-markdown-display';
import { useTheme } from '../../hooks/useTheme';
import { getCompletionResultMessageStyles } from '../../styles';

const CompletionResultMessage = ({ item }) => {
  const { theme } = useTheme();
  const styles = getCompletionResultMessageStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="check-circle" size={20} color={theme.success} />
        <Text style={styles.headerText}>Task Complete!</Text>
      </View>

      <Markdown
        style={{
          body: styles.markdownBody,
          paragraph: styles.markdownParagraph,
          bullet_list_icon: styles.markdownBullet,
          list_item: styles.markdownListItem,
          code_inline: styles.code_inline,
        }}
      >
        {item.text}
      </Markdown>
    </View>
  );
};

export default CompletionResultMessage;
