import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Markdown from 'react-native-markdown-display';

const FileOperationMessage = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const operation = JSON.parse(item.text);
  const { tool, path, diff, content } = operation || {};

  const renderHeader = () => {
    switch (tool) {
      case 'readFile':
        return { icon: 'eye', text: '📁 Kilo code wants to read a file' };
      case 'appliedDiff':
        return { icon: 'edit', text: '✏️ Kilo code wants to edit this file' };
      case 'newFileCreated':
        return { icon: 'file', text: '🆕 Kilo code wants to create a new file' };
      default:
        return { icon: 'file-text-o', text: 'Kilo code operation' };
    }
  };

  const header = renderHeader();

  return (
    <View className="p-2 my-1 mx-2 rounded-lg bg-gray-200 self-start">
      {/* Header */}
      <View className="flex-row items-center mb-1">
        {/* <Icon name={header.icon} size={20} color="black" /> */}
        <Text style={{ fontSize: 16, fontWeight: '700',}}>
          {header.text}
        </Text>
      </View>

      {/* Path */}
      {path && (
        <TouchableOpacity
          onPress={() => setIsExpanded(!isExpanded)}
          className="ml-4"
        >
          <Markdown
            style={{
              code_inline: {
                backgroundColor: '#f0f0f0',
                padding: 2,
                borderRadius: 4,
                fontSize: 14,
              },
            }}
          >
            {`\`${path}\``}
          </Markdown>
        </TouchableOpacity>
      )}

      {/* Expanded Content */}
      {isExpanded && (
        <View className="mt-2 ml-4">
          {diff && <Markdown>{`\`\`\`diff\n${diff}\n\`\`\``}</Markdown>}
          {content && !diff && <Markdown>{`\`\`\`\n${content}\n\`\`\``}</Markdown>}
        </View>
      )}

      {/* Approve / Reject */}
      {/* <View className="flex-row mt-2">
        <TouchableOpacity className="bg-blue-500 rounded-lg p-2 mr-2">
          <Text className="text-white">Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 rounded-lg p-2">
          <Text className="text-white">Reject</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default FileOperationMessage;
