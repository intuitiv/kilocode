import React from 'react';
import { View, Text } from 'react-native';
import { getWorkspacePath, getServerUrl } from '../config';
import { useTheme } from '../hooks/useTheme';
import { getHeaderTitleStyles } from '../styles';
import VerboseToggle from './VerboseToggle';

const HeaderTitle = () => {
  const { theme } = useTheme();
  const styles = getHeaderTitleStyles(theme);
  const fullPath = getWorkspacePath();
  const parts = fullPath.split('/');
  const folder = parts[parts.length - 1];
  const url = getServerUrl();

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style= {styles.title}
      >
        {folder}
      </Text>
      <View style={{ marginLeft: 16 }}>
        <VerboseToggle />
      </View>
      {/* <Text style={styles.subtitle}>{fullPath}</Text> */}
      {/* <Text style={styles.url}>
        {url}
      </Text> */}
    </View>
  );
};

export default HeaderTitle;