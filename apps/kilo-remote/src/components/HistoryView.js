import React from 'react';
import { View, Text, FlatList } from 'react-native';

const mockTasks = [
  { id: '1', text: 'Task 1' },
  { id: '2', text: 'Task 2' },
  { id: '3', text: 'Task 3' },
];

const HistoryView = () => {
  return (
    <View className="flex-1 w-full">
      <FlatList
        data={mockTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-2 my-1 mx-2 rounded-lg bg-gray-200">
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HistoryView;