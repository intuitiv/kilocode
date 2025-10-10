import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import EventSource from 'react-native-event-source';
import HistoryView from './HistoryView';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatView = () => {
  console.log('ChatView rendered');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [mode, setMode] = useState('chat');

  useEffect(() => {
    let eventSource;

    if (isStreaming) {
      eventSource = new EventSource('http://localhost:3000/stream');

      eventSource.addEventListener('open', () => {
        console.log('EventSource opened');
      });

      eventSource.addEventListener('message', (event) => {
        console.log('Received message:', event.data);
        const newMessage = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      eventSource.addEventListener('error', (event) => {
        console.error('EventSource error:', event);
        setIsStreaming(false);
      });
    }

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [isStreaming]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: inputValue, sender: 'user' }]);
      setInputValue('');
      setIsStreaming(true);
    }
  };

  const handleCancel = () => {
    setIsStreaming(false);
  };

  const handleModeSwitch = () => {
    setMode(mode === 'chat' ? 'history' : 'chat');
  };

  return (
    <View className="flex-1 w-full">
      <View className="flex-row items-center justify-between p-2 border-b border-gray-200">
        <Text className="text-lg font-bold">{mode === 'chat' ? 'Chat' : 'History'}</Text>
        <Icon.Button name="history" backgroundColor="#3b5998" onPress={handleModeSwitch}>
          {mode === 'chat' ? 'History' : 'Chat'}
        </Icon.Button>
      </View>
      {mode === 'chat' ? (
        <>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className={`p-2 my-1 mx-2 rounded-lg ${item.sender === 'user' ? 'bg-primary self-end' : 'bg-gray-200 self-start'}`}>
                <Text className={item.sender === 'user' ? 'text-white' : 'text-black'}>{item.text}</Text>
              </View>
            )}
          />
          <View className="flex-row items-center p-2 border-t border-gray-200">
            <TextInput
              className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Type a message..."
            />
            {isStreaming ? (
              <Button title="Cancel" onPress={handleCancel} />
            ) : (
              <Button title="Send" onPress={handleSend} />
            )}
          </View>
        </>
      ) : (
        <HistoryView />
      )}
    </View>
  );
};

export default ChatView;