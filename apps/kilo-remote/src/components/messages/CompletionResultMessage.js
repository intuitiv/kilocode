import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Markdown from 'react-native-markdown-display';

const CompletionResultMessage = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="check-circle" size={20} color="#16a34a" />
        <Text style={styles.headerText}>Task Complete!</Text>
      </View>

      {/* Markdown Body */}
      <Markdown
        style={{
          body: styles.markdownBody,
          paragraph: styles.markdownParagraph,
          bullet_list_icon: styles.markdownBullet,
          list_item: styles.markdownListItem,
          code_inline: {
            backgroundColor: '#f0f0f0',
            padding: 2,
            borderRadius: 4,
          },
        }}
      >
        {item.text}
      </Markdown>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecfdf5', // light green
    borderColor: '#86efac', // border green
    borderWidth: 1,
    borderRadius: 10, // flat edges to fill width cleanly
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'stretch', // ensures full width in flex layout
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  headerText: {
    fontWeight: '600',
    color: '#166534',
    marginLeft: 8,
    fontSize: 15,
  },
  markdownBody: {
    color: '#166534',
    fontSize: 14,
    lineHeight: 20,
  },
  markdownParagraph: {
    marginBottom: 4,
  },
  markdownBullet: {
    color: '#16a34a',
  },
  markdownListItem: {
    color: '#166534',
  },
});

export default CompletionResultMessage;
