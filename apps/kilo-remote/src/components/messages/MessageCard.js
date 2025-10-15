import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { getMessageCardStyles } from '../../styles';

const MessageCard = ({ headerIcon, headerText, children, onHeaderPress }) => {
  const { theme } = useTheme();
  const styles = getMessageCardStyles(theme);

  const Header = () => (
    <View style={styles.header}>
      {headerIcon}
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );

  return (
    <View style={styles.card}>
      {onHeaderPress ? (
        <TouchableOpacity onPress={onHeaderPress} activeOpacity={0.7}>
          <Header />
        </TouchableOpacity>
      ) : (
        <Header />
      )}
      <View style={styles.body}>{children}</View>
    </View>
  );
};

export default MessageCard;