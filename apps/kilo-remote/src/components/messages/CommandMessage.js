import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../hooks/useTheme';
import { getCommandMessageStyles } from '../../styles';

const CommandMessage = ({ item }) => {
  const { theme } = useTheme();
  const styles = getCommandMessageStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="terminal" size={16} color={theme.primaryText} />
        <Text style={styles.headerText}>Running</Text>
      </View>

      <View style={styles.commandBox}>
        <Text style={styles.commandText}>{item.text}</Text>
      </View>

      <View style={styles.footer}>
        <Icon name="check" size={12} color={theme.dim} />
        <Text style={styles.footerText}>Auto-approved commands</Text>
      </View>
    </View>
  );
};

export default CommandMessage;
