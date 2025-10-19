import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/useTheme';
import { getMessageCardStyles } from '../../styles';

const MessageCard = ({ headerIcon, headerText, children, onHeaderPress, isError }) => {
  const { theme } = useTheme();
  const styles = getMessageCardStyles(theme);

const rainbowColors = [
  '#4DF4C0', // aqua mint (ties into your theme primary)
  '#00E0E0', // cyan pulse
  '#3AA8FF', // electric sky blue
  '#5C6BFF', // neon blue-violet
  '#8A7CFF', // soft indigo glow
  '#A0C4FF', // pastel ice blue
  '#CFFFE7', // pale turquoise highlight
];


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
    <LinearGradient
      colors={isError ? [theme.error, theme.error] : rainbowColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.card}>
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
    </LinearGradient>
  );
};

export default MessageCard;