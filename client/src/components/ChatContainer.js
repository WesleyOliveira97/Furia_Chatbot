import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import '../styles/ChatContainer.css';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Olá! Eu sou o Furia Assistant. Como posso ajudar você hoje?',
      isUser: false,
      time: '12:00'
    }
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle minimize button click
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Handle expand button click
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Get current time formatted as HH:MM
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Add a new message
  const addMessage = (text, isUser = false) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      isUser,
      time: getCurrentTime()
    };
    setMessages([...messages, newMessage]);
  };

  // Send message to server and get response
  const sendMessageToServer = async (message) => {
    try {
      setIsTyping(true);
      
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
      
      const data = await response.json();
      
      // Remove typing indicator and add bot response
      setIsTyping(false);
      addMessage(data.message, false);
    } catch (error) {
      console.error('Error communicating with the server:', error);
      // Fallback to error message if server communication fails
      setIsTyping(false);
      addMessage("Desculpe, estou tendo problemas de comunicação. Tente novamente mais tarde.", false);
    }
  };

  // Handle sending a new message
  const handleSendMessage = (message) => {
    if (message.trim() !== '') {
      addMessage(message, true);
      sendMessageToServer(message);
    }
  };

  return (
    <section className={`chat-container ${isMinimized ? 'minimized' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <ChatHeader 
        onMinimize={handleMinimize} 
        onExpand={handleExpand}
        isExpanded={isExpanded}
      />
      <ChatMessages 
        messages={messages} 
        isTyping={isTyping}
        messagesEndRef={messagesEndRef}
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </section>
  );
};

export default ChatContainer;
