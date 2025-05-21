import React, { useState } from 'react';
import { FaPaperclip, FaSmile, FaPaperPlane } from 'react-icons/fa';
import '../styles/ChatInput.css';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleEmojiClick = () => {
    alert('Emoji picker will be implemented here!');
  };

  const handleAttachmentClick = () => {
    alert('Attachment functionality will be implemented here!');
  };

  return (
    <div className="chat-input">
      <form id="chat-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <button 
            type="button" 
            className="btn-attachment"
            onClick={handleAttachmentClick}
          >
            <FaPaperclip />
          </button>
          <input 
            type="text" 
            id="user-input" 
            placeholder="Digite sua mensagem..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
          />
          <button 
            type="button" 
            className="btn-emoji"
            onClick={handleEmojiClick}
          >
            <FaSmile />
          </button>
          <button type="submit" className="btn-send">
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
