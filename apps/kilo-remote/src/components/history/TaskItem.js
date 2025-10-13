import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItem = ({ item, onSelect }) => {
  const formatDate = (ts) => {
    const date = new Date(ts);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <TouchableOpacity onPress={() => onSelect(item)} activeOpacity={0.8}>
      <View style={styles.card}>
        {/* 1️⃣ Task title */}
        <View style={styles.titleRow}>
          <Icon name="puzzle-piece" size={18} color="#2563eb" style={styles.icon} />
          <Text style={styles.taskText}>
            {item.task?.substring(0, 200) || 'Untitled Task'}
          </Text>
        </View>

        {/* 2️⃣ Date + Number + Mode */}
        <View style={styles.metaRow}>
          <Icon name="calendar" size={14} color="#6b7280" style={styles.iconSmall} />
          <Text style={styles.metaText}>
            {formatDate(item.ts)} • #{item.number} • {item.mode}
          </Text>
        </View>

        {/* 3️⃣ Tokens summary */}
        <View style={styles.tokenRow}>
          <Icon name="cube" size={14} color="#0ea5e9" style={styles.iconSmall} />
          <Text style={styles.tokenText}>
            <Text style={styles.tokenLabel}>In:</Text> {item.tokensIn ?? 0}{'   '}
            <Text style={styles.tokenLabel}>Out:</Text> {item.tokensOut ?? 0}{'   '}
            <Text style={styles.tokenLabel}>Total:</Text>{' '}
            <Text style={styles.tokenTotal}>{item.tokensTotal ?? 0}</Text>
          </Text>
        </View>

        {/* 4️⃣ Cost */}
        <View style={styles.costRow}>
          <Icon name="dollar" size={14} color="#22c55e" style={styles.iconSmall} />
          <Text style={styles.costText}>${item.totalCost?.toFixed(4) ?? '0.0000'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 14,
    marginHorizontal: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  taskText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    flexShrink: 1,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#6b7280',
  },
  tokenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  tokenText: {
    fontSize: 14.5,
    color: '#374151',
  },
  tokenLabel: {
    fontWeight: '500',
    color: '#111827',
  },
  tokenTotal: {
    fontWeight: '700',
    color: '#2563eb',
  },
  costRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  costText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#16a34a',
  },
  icon: {
    marginRight: 8,
  },
  iconSmall: {
    marginRight: 6,
  },
});

export default TaskItem;
