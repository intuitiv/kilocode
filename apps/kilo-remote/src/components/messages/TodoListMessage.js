import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const TodoListMessage = ({ item }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const parsed = JSON.parse(item.text);
      setTodos(parsed.todos || []);
    } catch (e) {
      console.warn("Invalid todo JSON", e);
    }
  }, [item]);

  const getColor = (status) => {
    console.log(status)
    switch (status) {
      case "completed":
        return "#03993A"
      case "in_progress":
        return "#E9B824"
      default:
        return '#1E293B'
    }
  };

  // optional: remove backticks and markdown syntax for cleaner display
  const cleanText = (text) =>
    text
      .replace(/`([^`]*)`/g, "$1") // remove inline code backticks
      .replace(/\*\*(.*?)\*\*/g, "$1") // remove bold
      .replace(/\*(.*?)\*/g, "$1"); // remove italics

  return (
    <View>
      {/* <Text style={{ fontSize: 18, marginBottom: 4 }}>📝</Text> */}
      <Text style={{ fontSize: 16, fontWeight: '700',}}>📝 Todo List updated</Text>

      {todos.map((t) => (
        <Text
          key={t.id}
          style={{
            color: getColor(t.status),
            fontSize: 14,
            marginVertical: 2,
            marginLeft:16,
            lineHeight: 20,
          }}
        >
          {cleanText(t.content)}
        </Text>
      ))}
    </View>
  );
};

export default TodoListMessage;
