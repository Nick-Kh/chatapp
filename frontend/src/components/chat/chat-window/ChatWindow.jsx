import React, { useContext, useEffect } from 'react';
import ChatContext from '../../context/chat/chatContext';
import './ChatWindow.scss';

const ChatWindow = ({ chat, onCloseChat }) => {
  const chatContext = useContext(ChatContext);
  const { messages, getMessage, deleteMessages } = chatContext;
  let timeout = null;

  useEffect(() => {
    timeout = setInterval(() => {
      getMessage();
    }, 2000)
    return () => {
      deleteMessages();
      clearInterval(timeout);
    }
  }, [])
  return (
    <>
      <div className="chat-window">
        <div className="header" style={{background: chat.themeColor}}>
          <span>{chat.title}</span>
          <span onClick={onCloseChat} className="close-btn">X</span>
        </div>
        <div className="content">
          {messages && messages.length ? messages.map(msg => (
            <div className="msg-body">
              <div className="details">
                <div className="date">{msg.body.receivedAt}</div>
                <div className="from">{msg.fromName}</div>
              </div>
              <div className="message">
                {msg.body.body}
              </div>
            </div>
          )): null }
        </div>
      </div>
      <div onClick={onCloseChat} className="fade"></div>
    </>
  )
}

export default ChatWindow;
