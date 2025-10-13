import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskItem from './history/TaskItem';
import { useNavigation } from '@react-navigation/native';

import { TextInput } from 'react-native';
const HistoryView = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const activeWorkspace = "/Users/sainath/PycharmProjects/kilocode/kilocode";
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then((response) => response.json())
      .then((data) => {
        const filteredTasks = data.filter(
          (task) =>
            task.workspace === activeWorkspace &&
            task.task.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const sortedTasks = filteredTasks.sort((a, b) => b.ts - a.ts);
        setTasks(sortedTasks);
      });
  }, [searchQuery]);

  const handleSelect = (item) => {
    navigation.navigate('Chat', { taskId: item.id });
  };

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            onSelect={handleSelect}
          />
        )}
      />
    </View>
  );
};

export default HistoryView;