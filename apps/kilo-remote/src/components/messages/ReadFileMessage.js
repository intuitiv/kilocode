import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../hooks/useTheme';
import { getReadFileMessageStyles } from '../styles';

const ReadFileMessage = ({ item }) => {
  const { theme } = useTheme();
  const styles = getReadFileMessageStyles(theme);
  const file = JSON.parse(item.text);

  return (
    <View style={[styles.container, { backgroundColor: theme.codeBlocks }]}>
      <View className="flex-row items-center">
        <Icon name="file-text-o" size={20} style={styles.icon} />
        <Text style={[styles.headerText, { color: theme.primaryText }]}>Kilo wants to read this file:</Text>
      </View>
      <Text style={[styles.pathText, { color: theme.primaryText }]}>{file.path}</Text>
      <View className="flex-row mt-2">
        <TouchableOpacity style={[styles.approveButton, { backgroundColor: theme.accent }]} className="rounded-lg p-2 mr-2">
          <Text style={styles.approveButtonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rejectButton, { backgroundColor: theme.error }]} className="rounded-lg p-2">
          <Text style={styles.rejectButtonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadFileMessage;