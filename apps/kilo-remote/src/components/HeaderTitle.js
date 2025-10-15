import React from 'react';
import { View, Text } from 'react-native';
import { getWorkspacePath, getServerUrl } from '../config';
import { useTheme } from '../hooks/useTheme';
import { getHeaderTitleStyles } from '../styles';

const HeaderTitle = () => {
  const { theme } = useTheme();
  const styles = getHeaderTitleStyles(theme);
  const fullPath = getWorkspacePath();
  const parts = fullPath.split('/');
  const folder = parts[parts.length - 1];
  const url = getServerUrl();

  return (
    <View>
      <Text style={styles.title}>{folder}</Text>
      <Text style={styles.subtitle}>{fullPath}</Text>
      <Text style={styles.subtitle}>{url}</Text>
    </View>
  );
};

export default HeaderTitle;