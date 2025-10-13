import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReadFileMessage = ({ item }) => {
  const file = JSON.parse(item.text);
  return (
    <View className="p-2 my-1 mx-2 rounded-lg bg-gray-200 self-start">
      <View className="flex-row items-center">
        <Icon name="file-text-o" size={20} color="black" />
        <Text className="font-bold ml-2">Kilo wants to read this file:</Text>
      </View>
      <Text>{file.path}</Text>
      <View className="flex-row mt-2">
        <TouchableOpacity className="bg-blue-500 rounded-lg p-2 mr-2">
          <Text className="text-white">Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 rounded-lg p-2">
          <Text className="text-white">Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadFileMessage;