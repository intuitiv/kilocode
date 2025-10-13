import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons from expo

const KiloQuestionMessage = ({ item, onSelect }) => {
  const question = JSON.parse(item.text);

  const formatTime = (ts) => {
    const date = new Date(ts);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={{ borderRadius: 8, alignSelf: 'flex-start', paddingVertical: 4 }}>
      {/* Header Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
        <Ionicons name="help-circle-outline" size={18} color="black" />
        <Text style={{ fontSize: 16, fontWeight: '700'}}>
          Kilo Code has a question
        </Text>
        {item.ts && (
          <Text style={{ marginLeft: 25, color: '#4B5563', fontSize: 12 }}>
            {formatTime(item.ts)}
          </Text>
        )}
      </View>

      {/* Markdown Question */}
      <View style={{ marginLeft: 25 }}>
      <Markdown
        style={{
          body: { color: 'black' },
          code_inline: {
            backgroundColor: '#f0f0f0',
            padding: 2,
            borderRadius: 4,
          },
          
        }}
      >
        {question.question}
      </Markdown>

      {/* Answers */}
      <View style={{ marginTop: 8 }}>
        {question.suggest.map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSelect?.(suggestion.answer)}
            activeOpacity={0.7}
            style={{
              borderColor: '#9CA3AF',
              borderWidth: 1,
              borderRadius: 6,
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginBottom: 6,
            }}
          >
            <Text style={{ color: '#111827' }}>{suggestion.answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
    </View>
  );
};

export default KiloQuestionMessage;
