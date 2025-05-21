import React from 'react';
import '../styles/Message.css';
// Import when available
// import botAvatar from '../assets/images/bot-avatar.png';
// import userAvatar from '../assets/images/user-avatar.png';

const Message = ({ text, isUser, time }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-avatar">
        {/* Use placeholders until you have avatars */}
        <div className="avatar-placeholder">
          {isUser ? 'U' : 'B'}
        </div>
      </div>
      <div className="message-content">
        <p>{text}</p>
        <span className="message-time">{time}</span>
      </div>
    </div>
  );
};

export default Message;
