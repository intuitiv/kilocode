import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HistoryView from './HistoryView';
import ChatInput from './ChatInput';
import ChatRow from './ChatRow';
import { streamMessages } from '../services/api';

const ChatView = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [mode, setMode] = useState('chat');
  const flatListRef = useRef(null);
  const inputRef = useRef(null);
  const { taskId } = route.params || {};

  useEffect(() => {
    if (taskId) {
      fetch(`http://localhost:3000/stream/${taskId}`)
        .then((response) => response.json())
        .then((data) => {
          setMessages(data);
          const task = sampleTasks.find((task) => task.id === taskId);
          if (task) {
            setMode(task.mode);
          }
        });
    } else {
      inputRef.current?.focus();
    }
  }, [taskId]);
  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), text: inputValue, sender: 'user' }]);
    setInputValue('');
    setIsStreaming(true);
    streamMessages(
      (newMessage) => {
        if (newMessage.partial) {
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.ts === newMessage.ts) {
              newMessages[newMessages.length - 1] = newMessage;
            } else {
              newMessages.push(newMessage);
            }
            return newMessages;
          });
        } else {
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.ts === newMessage.ts) {
              newMessages[newMessages.length - 1] = newMessage;
            } else {
              newMessages.push(newMessage);
            }
            return newMessages;
          });
        }
      },
      () => {
        setIsStreaming(false);
      }
    );
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  };

  const handleCancel = () => {
    setIsStreaming(false);
  };
  const handleModeSwitch = () => setMode(mode === 'chat' ? 'history' : 'chat');

  return (
    <View style={styles.container}>
      {mode === 'chat' ? (
        <>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
          >
            {/* Scrollable messages */}
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ChatRow item={item} onSuggestionPress={(suggestion) => {
                setInputValue(suggestion);
              }} />}
              contentContainerStyle={{ padding: 10, paddingBottom: 150 }} // reserve bottom space
              showsVerticalScrollIndicator={true}
            />
          </KeyboardAvoidingView>

          {/* Fixed input at bottom (separate layer) */}
          <View style={styles.inputContainer}>
            <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              isStreaming={isStreaming}
              handleSend={handleSend}
              handleCancel={handleCancel}
              handleModeSwitch={handleModeSwitch}
              mode={mode}
              inputRef={inputRef}
            />
          </View>
        </>
      ) : (
        <HistoryView />
      )}
    </View>
  );
};

export default ChatView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f3f4f6',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
});
