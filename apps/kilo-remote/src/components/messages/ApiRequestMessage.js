import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../hooks/useTheme';
import { getApiRequestMessageStyles } from '../../styles';

const ApiRequestMessage = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const styles = getApiRequestMessageStyles(theme);
  const request = JSON.parse(item.text);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Icon
          name={expanded ? 'angle-down' : 'angle-right'}
          size={14}
          color={theme.dim}
        />
        <Text style={styles.headerText}>API Request</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.content}>
          <Text selectable style={styles.codeText}>
            {request.request || '_No request data_'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ApiRequestMessage;
