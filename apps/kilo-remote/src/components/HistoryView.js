import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskItem from './history/TaskItem';

const sampleTasks = [
  { id: '1', title: 'Fix timestamp bug', date: '2025-10-13', isFavorite: false },
  { id: '2', title: 'Implement new feature', date: '2025-10-12', isFavorite: true },
  { id: '3', title: 'Refactor ChatView', date: '2025-10-11', isFavorite: false },
];

const HistoryView = () => {
  const [tasks, setTasks] = useState(sampleTasks);

  const handleSelect = (item) => {
    console.log('Selected:', item);
  };

  const handleToggleFavorite = (item) => {
    setTasks(
      tasks.map((task) =>
        task.id === item.id ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };

  const handleDelete = (item) => {
    setTasks(tasks.filter((task) => task.id !== item.id));
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          onSelect={handleSelect}
          onToggleFavorite={handleToggleFavorite}
          onDelete={handleDelete}
        />
      )}
    />
  );
};

export default HistoryView;