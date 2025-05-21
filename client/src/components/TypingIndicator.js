import React from 'react';
import '../styles/TypingIndicator.css';
// Import when available
// import botAvatar from '../assets/images/bot-avatar.png';

const TypingIndicator = () => {
  return (
    <div className="message bot-message typing-indicator">
      <div className="message-avatar">
        {/* Use a placeholder until you have an avatar */}
        <div className="avatar-placeholder">B</div>
      </div>
      <div className="message-content">
        <div className="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
