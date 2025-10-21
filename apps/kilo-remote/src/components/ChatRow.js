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
import ToolMessage from './messages/ToolMessage';
import SwitchModeMessage from './messages/SwitchModeMessage';

const ChatRow = ({ item, onSuggestionPress }) => {
  const renderContent = () => {
  console.log(item.text.substring(0, 30));
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
                parts.push(<TextMessage key={lastIndex} item={item} text={item.text.substring(lastIndex, match.index)} />);
              }
              parts.push(<CodeBlock key={match.index} language={match[1]} code={match[2]} />);
              lastIndex = match.index + match[0].length;
            }

            if (lastIndex < item.text.length) {
              parts.push(<TextMessage key={lastIndex} item={item} text={item.text.substring(lastIndex)} />);
            }

            return parts;
          case 'command_output':
            return <KiloSaidMessage item={item} />;
          case 'completion_result':
            return <CompletionResultMessage item={item} />;
          default:
            return <TextMessage item={item} text={item.text} />;
          case 'checkpoint_saved':
            return <CheckpointMessage item={item} />;
        }
      case 'ask':
        switch (item.ask) {
          case 'followup':
            return <KiloQuestionMessage item={item} onSelect={onSuggestionPress} />;
          case 'tool':
            const tool = JSON.parse(item.text.replace(/\n/g, "\\n"));
            if (tool.tool === 'updateTodoList') {
              return <TodoListMessage item={item} />;
            }
            if (tool.tool === 'readFile' || tool.tool === 'appliedDiff' || tool.tool === 'newFileCreated') {
              return <FileOperationMessage item={item} />;
            }
            if (tool.tool === 'switchMode') {
              return <SwitchModeMessage item={item} />;
            }
            return <ToolMessage item={item} />;
          case 'command':
            return <CommandMessage item={item} />;
          default:
            return <TextMessage item={item} text={item.text} />;
        }
      default:
        return <TextMessage item={item} text={item.text} />;
    }
  };

  return (
    <View key={item.ts} style={{ marginVertical: 2, backgroundColor: item.sender === 'user' ? '#0c1d3a' : 'transparent' }}>
      {renderContent()}
    </View>
  );
};

const MemoizedChatRow = React.memo(ChatRow);
MemoizedChatRow.whyDidYouRender = true;
export default MemoizedChatRow;