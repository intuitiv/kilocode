import React from 'react';
import { View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { getKiloSaidMessageStyles } from '../../styles';

const KiloSaidMessage = ({ item }) => {
  const { theme } = useTheme();
  const styles = getKiloSaidMessageStyles(theme);

  return (
    <View className="p-2 my-1 mx-2 rounded-lg bg-gray-200 self-start">
      <View style={styles.container}>
        <Feather name="message-circle" size={18} style={styles.icon} />
        <Text style={styles.text}>
           Kilo said:
        </Text>
      </View>

      <View style={styles.markdownContainer}>
        <Markdown
          style={{
            code_inline: styles.code_inline,
          }}
        >
          {item.text}
        </Markdown>
      </View>
    </View>
  );
};

export default KiloSaidMessage;
