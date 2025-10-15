import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';
import { getPinnedMessageStyles } from '../styles';

const PinnedMessage = ({ message }) => {
  const { theme } = useTheme();
  const styles = getPinnedMessageStyles(theme);

  if (!message) return null;

  return (
    <View style={styles.container}>
      <Icon name="thumb-tack" size={16} color={theme.dim} style={styles.icon} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default PinnedMessage;