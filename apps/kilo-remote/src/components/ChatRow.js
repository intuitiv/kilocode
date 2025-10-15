import React from 'react';
import { View } from 'react-native';
import TextMessage from './messages/TextMessage';
import CodeBlock from './messages/CodeBlock';
import KiloSaidMessage from './messages/KiloSaidMessage';
import CheckpointMessage from './messages/CheckpointMessage';
import ApiRequestMessage from './messages/ApiRequestMessage';
import KiloQuestionMessage from './messages/KiloQuestionMessage';
import TodoListMessage from './messages/TodoListMessage';
import FileOperationMessage from './messages/FileOperationMessage';
import CommandMessage from './messages/CommandMessage';
import CompletionResultMessage from './messages/CompletionResultMessage';

const ChatRow = ({ item, onSuggestionPress }) => {
  const renderContent = () => {
   switch (item.type) {
      case 'say':
        switch (item.say) {
          case 'text':
            return <KiloSaidMessage item={item} />;
          case 'api_req_started':
            return <ApiRequestMessage item={item} />;
          case 'user_feedback':
            const codeBlockRegex = /```(\w+)\n([\s\S]*?)```/g;
            const parts = [];
            let lastIndex = 0;
            let match;

            while ((match = codeBlockRegex.exec(item.text)) !== null) {
              if (match.index > lastIndex) {
                parts.push(<TextMessage key={lastIndex} text={item.text.substring(lastIndex, match.index)} sender={item.sender} />);
              }
              parts.push(<CodeBlock key={match.index} language={match[1]} code={match[2]} />);
              lastIndex = match.index + match[0].length;
            }

            if (lastIndex < item.text.length) {
              parts.push(<TextMessage key={lastIndex} text={item.text.substring(lastIndex)} sender={item.sender} />);
            }

            return parts;
          case 'command_output':
            return <KiloSaidMessage item={item} />;
          case 'completion_result':
            return <CompletionResultMessage item={item} />;
          default:
            return <TextMessage text={item.text} sender={item.sender} />;
          case 'checkpoint_saved':
            return <CheckpointMessage item={item} />;
        }
      case 'ask':
        switch (item.ask) {
          case 'followup':
            return <KiloQuestionMessage item={item} onSelect={onSuggestionPress} />;
          case 'tool':
            console.log(item.text)
            const tool = JSON.parse(item.text.replace(/\n/g, "\\n"));
            if (tool.tool === 'updateTodoList') {
              return <TodoListMessage item={item} />;
            }
            if (tool.tool === 'readFile' || tool.tool === 'appliedDiff' || tool.tool === 'newFileCreated') {
              return <FileOperationMessage item={item} />;
            }
            return <ApiRequestMessage item={item} />;
          case 'command':
            return <CommandMessage item={item} />;
          default:
            return <TextMessage text={item.text} sender={item.sender} />;
        }
      default:
        return <TextMessage text={item.text} sender={item.sender} />;
    }
  };

  return (
    <View key={item.ts} className={`p-2 my-1 mx-2 rounded-lg ${item.sender === 'user' ? 'bg-primary self-end' : 'bg-gray-200 self-start'}`} style={{ marginBottom: 12 }}>
      {renderContent()}
    </View>
  );
};

export default ChatRow;