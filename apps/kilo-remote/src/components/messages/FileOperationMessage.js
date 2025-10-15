import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../hooks/useTheme';
import { getFileOperationMessageStyles } from '../../styles';
import MessageCard from './MessageCard';
import CodeBlock from './CodeBlock';

const FileOperationMessage = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const styles = useMemo(() => getFileOperationMessageStyles(theme), [theme]);
  const operation = JSON.parse(item.text);
  const { tool, path, diff, content } = operation || {};

  const getLanguage = (path) => {
    const extension = path.split('.').pop();
    switch (extension) {
      case 'kt':
        return 'kotlin';
      case 'js':
        return 'javascript';
      case 'json':
        return 'json';
      case 'html':
        return 'html';
      default:
        return 'text';
    }
  };

  const headerInfo = useMemo(() => {
    let text;
    let iconName;
    switch (tool) {
      case 'readFile':
        text = 'Kilo code wants to read a file';
        iconName = 'eye';
        break;
      case 'appliedDiff':
        text = 'Kilo code wants to update a file';
        iconName = 'edit';
        break;
      case 'newFileCreated':
        text = 'Kilo code wants to create a new file';
        iconName = 'file';
        break;
      default:
        return { text: 'Kilo code operation', iconName: 'file-text-o' };
    }
    return { text, iconName };
  }, [tool]);

  return (
    <MessageCard
      headerIcon={<Icon name={headerInfo.iconName} size={18} style={styles.icon} />}
      headerText={headerInfo.text}
      onHeaderPress={() => setIsExpanded(!isExpanded)}
    >
      {path && (
        <TouchableOpacity
          onPress={() => setIsExpanded(!isExpanded)}
          style={styles.pathContainer}
        >
          <Text style={styles.pathText}>{path}</Text>
        </TouchableOpacity>
      )}

      {isExpanded && (
        <View style={styles.contentContainer}>
          {diff && <CodeBlock language="diff" code={String(diff)} />}
          {content && !diff && (
            <CodeBlock language={getLanguage(path)} code={String(content)} />
          )}
        </View>
      )}
    </MessageCard>
  );
};

export default FileOperationMessage;
