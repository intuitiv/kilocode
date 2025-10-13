import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ToolMessage = ({ item }) => {
  const tool = JSON.parse(item.text);
  return (
    <View className="p-2 my-1 mx-2 rounded-lg bg-gray-200 self-start">
      <View className="flex-row items-center">
        <Icon name="wrench" size={20} color="black" />
        <Text className="font-bold ml-2">Tool: {tool.tool}</Text>
      </View>
    </View>
  );
};

export default ToolMessage;