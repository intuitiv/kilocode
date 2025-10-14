import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import TaskItem from './history/TaskItem';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getTasks } from '../services/api';
import { getActiveWorkspace } from '../config';

const HistoryView = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const activeWorkspace = getActiveWorkspace();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      console.log('HistoryView focused');
      console.log('activeWorkspace:', activeWorkspace);
      getTasks().then((data) => {
        if (data) {
          console.log('All tasks from server:', data);
          const filteredTasks = data.filter(
            (task) =>
              task.workspace === activeWorkspace &&
              task.task.toLowerCase().includes(searchQuery.toLowerCase())
          );
          console.log('Filtered tasks:', filteredTasks);
          const sortedTasks = filteredTasks.sort((a, b) => b.ts - a.ts);
          console.log('Sorted tasks:', sortedTasks);
          setTasks(sortedTasks);
        }
      });
    }, [searchQuery, activeWorkspace])
  );

  const handleSelect = (item) => {
    navigation.navigate('ChatTab', {
      screen: 'ChatDetail',
      params: { task: item },
    });
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