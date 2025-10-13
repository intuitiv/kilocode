import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';

const modes = [
  { label: 'Architect', value: 'Architect' },
  { label: 'Code', value: 'Code' },
  { label: 'Ask', value: 'Ask' },
  { label: 'Debug', value: 'Debug' },
  { label: 'Orchestrator', value: 'Orchestrator' },
  { label: 'Translate', value: 'Translate' },
  { label: 'Test', value: 'Test' },
];

const ChatInput = ({
  inputValue,
  setInputValue,
  isStreaming,
  handleSend,
  handleCancel,
  inputRef,
}) => {
  const [selectedMode, setSelectedMode] = useState('Architect');

  return (
    <View
      style={{
        padding: 8,
        borderWidth: 1,
        borderColor: '#3b82f6', // Outer border color
        borderRadius: 10,
        margin: 8,
        backgroundColor: 'white',
      }}
    >
      {/* Text Input (no border even when focused) */}
      <TextInput
        ref={inputRef}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Type a message..."
        placeholderTextColor="grey"
        multiline
        style={{
          borderWidth: 0, // no visible border
          outlineStyle: 'none', // prevent outline in web builds
          padding: 10,
          minHeight: 60,
          textAlignVertical: 'top',
        }}
        onFocus={(e) => {
          // prevent border or highlight on focus (Android/iOS-safe)
          e.target?.setNativeProps?.({
            style: { borderWidth: 0, outlineStyle: 'none' },
          });
        }}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === 'Enter' && e.nativeEvent.metaKey) {
            handleSend();
          }
        }}
      />

      {/* Mode dropdown and Send/Cancel buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <View style={{ width: 130 }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedMode(value)}
            items={modes}
            value={selectedMode}
            useNativeAndroidPickerStyle={false}
            style={{
              inputIOS: {
                fontSize: 14,
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#9ca3af',
                borderRadius: 6,
                color: 'black',
                backgroundColor: 'white',
              },
              inputAndroid: {
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderWidth: 0.5,
                borderColor: '#9ca3af',
                borderRadius: 6,
                color: 'black',
                backgroundColor: 'white',
              },
            }}
            Icon={() => (
              <Icon
                name="chevron-down"
                size={18}
                color="gray"
                style={{ paddingRight: 8 }}
              />
            )}
          />
        </View>

        {isStreaming ? (
          <TouchableOpacity onPress={handleCancel} style={{ padding: 8 }}>
            <Icon name="stop" size={22} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleSend} style={{ padding: 8 }}>
            <Icon name="send" size={22} color="#3b82f6" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ChatInput;
