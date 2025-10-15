import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
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
          <RNPickerSelect
            onValueChange={(value) => onModeChange(value)}
            items={modes}
            value={mode}
            placeholder={{ label: 'Default', value: null }}
            useNativeAndroidPickerStyle={false}
            style={styles.picker}
            Icon={() => (
              <Icon
                name="chevron-down"
                size={18}
                color={theme.dim}
                style={styles.icon}
              />
            )}
          />
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
