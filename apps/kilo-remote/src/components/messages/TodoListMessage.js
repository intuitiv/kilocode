import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { getTodoListMessageStyles } from "../styles";

const TodoListMessage = ({ item }) => {
  const [todos, setTodos] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme();
  const styles = getTodoListMessageStyles(theme);

  useEffect(() => {
    try {
      const parsed = JSON.parse(item.text);
      setTodos(parsed.todos || []);
    } catch (e) {
      console.warn("Invalid todo JSON", e);
    }
  }, [item]);

  const getColor = (status) => {
    switch (status) {
      case "completed":
        return theme.success;
      case "in_progress":
        return theme.warning;
      default:
        return theme.primaryText;
    }
  };

  const cleanText = (text) =>
    text
      .replace(/`([^`]*)`/g, "$1")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1");

  const inProgressTask = todos.find((t) => t.status === "in_progress");
  const visibleTodos = showAll ? todos : inProgressTask ? [inProgressTask] : [];

  return (
    <View>
      <Text style={styles.title}>📝 Todo List updated</Text>

      {visibleTodos.map((t) => (
        <Text
          key={t.id}
          style={[styles.task, { color: getColor(t.status) }]}
        >
          {cleanText(t.content)}
        </Text>
      ))}

      {todos.length > 1 && (
        <TouchableOpacity onPress={() => setShowAll(!showAll)}>
          <Text style={styles.toggleButton}>
            {showAll ? "Hide tasks ▲" : "Show all tasks ▼"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TodoListMessage;
