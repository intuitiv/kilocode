import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Markdown from 'react-native-markdown-display';
import { useTheme } from '../../hooks/useTheme';
import { getFileOperationMessageStyles } from '../../styles/messages';
import { getRandomVariant } from '../../utils/style-utils';
import { messageStyles } from '../../styles/messages';

const FileOperationMessage = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const styles = useMemo(() => getFileOperationMessageStyles(theme), [theme]);
  const operation = JSON.parse(item.text);
  const { tool, path, diff, content } = operation || {};

  const headerInfo = useMemo(() => {
    let styleKey;
    switch (tool) {
      case 'readFile':
        styleKey = 'readFile';
        break;
      case 'appliedDiff':
        styleKey = 'updatedFile';
        break;
      case 'newFileCreated':
        styleKey = 'createdFile';
        break;
      default:
        return { text: 'Kilo code operation' };
    }
    const text = getRandomVariant(messageStyles[styleKey]?.variants)?.replace(
      /<filename>/g,
      path
    );
    return { text };
  }, [tool, path]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerInfo.text}</Text>
      </View>

      {path && (
        <TouchableOpacity
          onPress={() => setIsExpanded(!isExpanded)}
          style={styles.pathContainer}
        >
          <Markdown style={styles.markdownPath}>{`\`${path}\``}</Markdown>
        </TouchableOpacity>
      )}

      {isExpanded && (
        <View style={styles.contentContainer}>
          {diff && <Markdown style={styles.markdownContent}>{`\`\`\`diff\n${diff}\n\`\`\``}</Markdown>}
          {content && !diff && <Markdown style={styles.markdownContent}>{`\`\`\`\n${content}\n\`\`\``}</Markdown>}
        </View>
      )}
    </View>
  );
};

export default FileOperationMessage;
