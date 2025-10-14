import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { getKiloQuestionMessageStyles } from '../styles';

const KiloQuestionMessage = ({ item, onSelect }) => {
  const { theme } = useTheme();
  const styles = getKiloQuestionMessageStyles(theme);
  const question = JSON.parse(item.text);

  const formatTime = (ts) => {
    const date = new Date(ts);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="help-circle-outline" size={18} color={theme.primaryText} />
        <Text style={styles.headerText}>
          Kilo Code has a question
        </Text>
        {item.ts && (
          <Text style={styles.time}>
            {formatTime(item.ts)}
          </Text>
        )}
      </View>

      <View style={styles.markdownContainer}>
        <Markdown
          style={{
            body: styles.markdownBody,
            code_inline: styles.code_inline,
          }}
        >
          {question.question}
        </Markdown>

        <View style={styles.answersContainer}>
          {question.suggest.map((suggestion, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onSelect?.(suggestion.answer)}
              activeOpacity={0.7}
              style={styles.suggestionButton}
            >
              <Text style={styles.suggestionText}>{suggestion.answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default KiloQuestionMessage;
