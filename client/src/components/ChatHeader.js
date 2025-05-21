import React from 'react';
import { FaMinus, FaExpand, FaCompress } from 'react-icons/fa';
import '../styles/ChatHeader.css';
// Import when available
// import botAvatar from '../assets/images/bot-avatar.png';

const ChatHeader = ({ onMinimize, onExpand, isExpanded }) => {
  return (
    <div className="chat-header">
      <div className="chat-avatar">
        {/* Use a placeholder until you have an avatar */}
        <div className="avatar-placeholder">B</div>
      </div>
      <div className="chat-info">
        <h2>Furia Assistant</h2>
        <p className="status online">Online</p>
      </div>
      <div className="chat-actions">
        <button className="btn-minimize" onClick={onMinimize}>
          <FaMinus />
        </button>
        <button className="btn-expand" onClick={onExpand}>
          {isExpanded ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
