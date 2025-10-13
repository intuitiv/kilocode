import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TodoListMessage = ({ item }) => {
  const [todos, setTodos] = useState([]);
  const [showAll, setShowAll] = useState(false);

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
        return "#03993A";
      case "in_progress":
        return "#E9B824";
      default:
        return "#1E293B";
    }
  };

  const cleanText = (text) =>
    text
      .replace(/`([^`]*)`/g, "$1")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1");

  // Find the in-progress task
  const inProgressTask = todos.find((t) => t.status === "in_progress");

  // Decide which tasks to show
  const visibleTodos = showAll ? todos : inProgressTask ? [inProgressTask] : [];

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "700" }}>📝 Todo List updated</Text>

      {visibleTodos.map((t) => (
        <Text
          key={t.id}
          style={{
            color: getColor(t.status),
            fontSize: 14,
            marginVertical: 2,
            marginLeft: 16,
            lineHeight: 20,
          }}
        >
          {cleanText(t.content)}
        </Text>
      ))}

      {/* Only show toggle if there are multiple todos */}
      {todos.length > 1 && (
        <TouchableOpacity onPress={() => setShowAll(!showAll)}>
          <Text
            style={{
              color: "#2563EB",
              marginLeft: 16,
              marginTop: 6,
              fontSize: 13,
            }}
          >
            {showAll ? "Hide tasks ▲" : "Show all tasks ▼"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TodoListMessage;
