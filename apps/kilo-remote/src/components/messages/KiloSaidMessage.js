import React from 'react';
import { View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Feather } from '@expo/vector-icons'; // Expo’s built-in icon set

const KiloSaidMessage = ({ item }) => {
  console.log('Kilo said message');

  return (
    <View className="p-2 my-1 mx-2 rounded-lg bg-gray-200 self-start">
      {/* Header Row: icon + text */}
      <View style={{ flexDirection: 'row', alignItems: 'center',}}>
        <Feather name="message-circle" size={18} color="black" />
        <Text style={{ fontSize: 16, fontWeight: '700',}}>
           Kilo said:
        </Text>
      </View>

      {/* Markdown message body */}
      <View style={{ marginLeft: 16 }}>
      <Markdown
        style={{
          marginLeft: 16,
          code_inline: {
            backgroundColor: '#f0f0f0',
            padding: 2,
            borderRadius: 4,
          },
        }}
      >
        {item.text}
      </Markdown>
      </View>
    </View>
  );
};

export default KiloSaidMessage;
