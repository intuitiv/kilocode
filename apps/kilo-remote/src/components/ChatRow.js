import React from 'react';
import { View } from 'react-native';
import TextMessage from './messages/TextMessage';
import CodeBlock from './messages/CodeBlock';
import KiloSaidMessage from './messages/KiloSaidMessage';
import CheckpointMessage from './messages/CheckpointMessage';
import ApiRequestMessage from './messages/ApiRequestMessage';
import KiloQuestionMessage from './messages/KiloQuestionMessage';
import TodoListMessage from './messages/TodoListMessage';
import ReadFileMessage from './messages/ReadFileMessage';
import FileOperationMessage from './messages/FileOperationMessage';
import CommandMessage from './messages/CommandMessage';
import CompletionResultMessage from './messages/CompletionResultMessage';

const ChatRow = ({ item, onSuggestionPress }) => {
  const renderContent = () => {
    console.log(`Rendering message with ts: ${item.ts}, type: ${item.type}, say: ${item.say}, ask: ${item.ask}`);
    switch (item.type) {
      case 'say':
        switch (item.say) {
          case 'text':
            console.log('Rendering KiloSaidMessage');
            return <KiloSaidMessage item={item} />;
          case 'api_req_started':
            console.log('Rendering ApiRequestMessage');
            return <ApiRequestMessage item={item} />;
          case 'user_feedback':
            console.log('Rendering user_feedback');
            const codeBlockRegex = /```(\w+)\n([\s\S]*?)```/g;
            const parts = [];
            let lastIndex = 0;
            let match;

            while ((match = codeBlockRegex.exec(item.text)) !== null) {
              if (match.index > lastIndex) {
                parts.push(<TextMessage key={lastIndex} text={item.text.substring(lastIndex, match.index)} />);
              }
              parts.push(<CodeBlock key={match.index} language={match[1]} code={match[2]} />);
              lastIndex = match.index + match[0].length;
            }

            if (lastIndex < item.text.length) {
              parts.push(<TextMessage key={lastIndex} text={item.text.substring(lastIndex)} />);
            }

            return parts;
          case 'command_output':
            console.log('Rendering KiloSaidMessage');
            return <KiloSaidMessage item={item} />;
          case 'completion_result':
            console.log('Rendering CompletionResultMessage');
            return <CompletionResultMessage item={item} />;
          default:
            console.log('Rendering default TextMessage');
            return <TextMessage text={item.text} />;
          case 'checkpoint_saved':
            console.log('Rendering CheckpointMessage');
            return <CheckpointMessage item={item} />;
        }
      case 'ask':
        switch (item.ask) {
          case 'followup':
            console.log('Rendering KiloQuestionMessage');
            return <KiloQuestionMessage item={item} onSelect={onSuggestionPress} />;
          case 'tool':
            const tool = JSON.parse(item.text);
            if (tool.tool === 'updateTodoList') {
              console.log('Rendering TodoListMessage');
              return <TodoListMessage item={item} />;
            }
            if (tool.tool === 'readFile' || tool.tool === 'appliedDiff' || tool.tool === 'newFileCreated') {
              console.log('Rendering FileOperationMessage');
              return <FileOperationMessage item={item} />;
            }
            return <ApiRequestMessage item={item} />;
          case 'command':
            console.log('Rendering CommandMessage');
            return <CommandMessage item={item} />;
          default:
            console.log('Rendering default TextMessage');
            return <TextMessage text={item.text} />;
        }
      default:
        console.log('Rendering default TextMessage');
        return <TextMessage text={item.text} />;
    }
  };

  return (
    <View key={item.ts} className={`p-2 my-1 mx-2 rounded-lg ${item.sender === 'user' ? 'bg-primary self-end' : 'bg-gray-200 self-start'}`} style={{ marginBottom: 12 }}>
      {renderContent()}
    </View>
  );
};

export default ChatRow;