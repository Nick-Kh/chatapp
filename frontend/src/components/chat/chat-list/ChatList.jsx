import React, { useState } from 'react';
import ChatCard from '../chat-card/ChatCard';
import './ChatList.scss';
import ChatWindow from '../chat-window/ChatWindow';

const ChatList = () => {
  const [currChat, setChat] = useState(null);

  const onCloseChat = () => {
    setChat(null);
  }

  const onOpenChat = (chat) => {
    setChat(chat);
  }

  const chatList = [
    {
      id: 1,
      themeColor: 'purple',
      title: 'About Everything',
      iconClass: 'fas fa-question'
    },
    {
      id: 2,
      themeColor: 'darkred',
      title: 'Work',
      iconClass: 'fas fa-briefcase'
    },
    {
      id: 3,
      themeColor: 'darkgoldenrod',
      title: 'Food',
      iconClass: 'fas fa-hamburger'
    },
    {
      id: 4,
      themeColor: 'darkcyan',
      title: 'Cars',
      iconClass: 'fas fa-car'
    },

  ]
  return (
    <div className="chat-list">
      {chatList.length && chatList.map(chat => (
        <div key={chat.id} onClick={() => onOpenChat(chat)}>
            <ChatCard chat={chat} />
        </div> 
      ))}
      {currChat && <ChatWindow onCloseChat={onCloseChat} chat={currChat} />}
    </div>
  )
}

export default ChatList;
