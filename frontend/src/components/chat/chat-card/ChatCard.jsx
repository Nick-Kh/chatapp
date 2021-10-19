import React from 'react';
import ChatWindow from '../chat-window/ChatWindow';
import './ChatCard.scss'

const ChatCard = ({ chat }) => {
  return (
    <div className="chat-card">
      <div className="title" style={{background: chat.themeColor}}>
        <h2>{chat.title}</h2>
      </div>
      <div className="body">
        <i class={`${chat.iconClass} fa-5x`} style={{color: chat.themeColor}}></i>
      </div>
    </div>
  )
}

export default ChatCard;
