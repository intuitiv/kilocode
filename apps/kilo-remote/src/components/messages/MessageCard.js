import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { getMessageCardStyles } from '../../styles';

const MessageCard = ({ headerIcon, headerText, children, onHeaderPress, isError }) => {
  const { theme } = useTheme();
  const styles = getMessageCardStyles(theme);

  const Header = () => {
    if (!headerText) {
      return null;
    }
    return (
      <View style={styles.header}>
        <View style={styles.icon}>{headerIcon}</View>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.card, isError && { borderColor: theme.error, borderWidth: 1 }]}>
      {headerText && (
        onHeaderPress ? (
          <TouchableOpacity onPress={onHeaderPress} activeOpacity={0.7}>
            <Header />
          </TouchableOpacity>
        ) : (
          <Header />
        )
      )}
      <View style={[styles.body, !headerText && { marginTop: 0 }]}>{children}</View>
    </View>
  );
};

export default MessageCard;