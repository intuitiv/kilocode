import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../hooks/useTheme';
import { getChatInputStyles } from '../styles';

const modes = [
  { label: 'Architect', value: 'architect' },
  { label: 'Code', value: 'code' },
  { label: 'Ask', value: 'ask' },
  { label: 'Debug', value: 'debug' },
  { label: 'Orchestrator', value: 'orchestrator' },
  { label: 'Translate', value: 'translate' },
  { label: 'Test', value: 'test' },
];

const ChatInput = ({
  inputValue,
  setInputValue,
  isStreaming,
  handleSend,
  handleCancel,
  inputRef,
  mode,
  onModeChange,
}) => {
  const { theme } = useTheme();
  const styles = getChatInputStyles(theme);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Type a message..."
        placeholderTextColor={theme.dim}
        multiline
        style={styles.textInput}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === 'Enter' && e.nativeEvent.metaKey) {
            handleSend();
          }
        }}
      />

      <View style={styles.bottomBar}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={mode}
            style={styles.picker}
            itemStyle={styles.itemStyle}
            dropdownIconColor={theme.primaryText}
            onValueChange={(itemValue) => onModeChange(itemValue)}
          >
            {modes.map((m) => (
              <Picker.Item key={m.value} label={m.label} value={m.value} />
            ))}
          </Picker>
        </View>

        {isStreaming ? (
          <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Icon name="stop" size={22} style={styles.cancelIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Icon name="send" size={22} style={styles.sendIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ChatInput;
