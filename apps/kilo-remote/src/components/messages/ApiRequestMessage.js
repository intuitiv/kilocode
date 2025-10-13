import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ApiRequestMessage = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const request = JSON.parse(item.text);

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Icon
          name={expanded ? 'angle-down' : 'angle-right'}
          size={14}
          color="gray"
        />
        <Text style={styles.headerText}>API Request</Text>
      </TouchableOpacity>

      {/* Expanded Content */}
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

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#4b5563', // gray-600
    fontSize: 14,
    marginLeft: 4,
  },
  content: {
    marginTop: 4,
    marginLeft: 22, // ← indentation under the arrow + label
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d1d5db', // subtle outline
  },
  codeText: {
    fontFamily: 'Menlo', // better monospace fallback
    fontSize: 13,
    color: '#111827',
  },
});

export default ApiRequestMessage;
