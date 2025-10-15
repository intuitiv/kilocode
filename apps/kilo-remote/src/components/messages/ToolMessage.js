import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../hooks/useTheme';
import { getToolMessageStyles } from '../../styles';
import MessageCard from './MessageCard';

const ToolMessage = ({ item }) => {
  const { theme } = useTheme();
  const styles = getToolMessageStyles(theme);
  const tool = JSON.parse(item.text);

  return (
    <MessageCard
      headerIcon={<Icon name="wrench" size={20} style={styles.icon} />}
      headerText={`Tool: ${tool.tool}`}
    />
  );
};

export default ToolMessage;