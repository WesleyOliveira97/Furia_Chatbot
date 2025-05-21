import React from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import '../styles/ChatMessages.css';

const ChatMessages = ({ messages, isTyping, messagesEndRef }) => {
  return (
    <div className="chat-messages" id="chat-messages">
      {messages.map((message) => (
        <Message 
          key={message.id} 
          text={message.text} 
          isUser={message.isUser} 
          time={message.time} 
        />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
