import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommandMessage = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="terminal" size={16} color="#3b3b3b" />
        <Text style={styles.headerText}>Running</Text>
      </View>

      {/* Command Box */}
      <View style={styles.commandBox}>
        <Text style={styles.commandText}>{item.text}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Icon name="check" size={12} color="#9ca3af" />
        <Text style={styles.footerText}>Auto-approved commands</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#d1d5db', // gray-300
    borderWidth: 1,
    borderRadius: 12,
    // marginHorizontal: 12,
    marginVertical: 6,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb', // gray-50
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomColor: '#e5e7eb', // gray-200
    borderBottomWidth: 1,
  },
  headerText: {
    marginLeft: 6,
    color: '#374151', // gray-700
    fontWeight: '600',
    fontSize: 14,
  },
  commandBox: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  commandText: {
    fontFamily: 'monospace',
    fontSize: 15,
    color: '#1f2937', // gray-800
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#e5e7eb',
    borderTopWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  footerText: {
    marginLeft: 6,
    color: '#9ca3af', // gray-400
    fontSize: 12,
  },
});

export default CommandMessage;
