import React, { useReducer } from 'react';
import ChatContext from './chatContext';
import chatReducer from './chatReducer';
import axios from 'axios';
import {
  GET_MESSAGE,
  SET_CURRENT_CHAT,
  DELETE_MESSAGES
} from './chatActionTypes';

const ChatState = (props) => {
  const initialState = {
    currentChatMessages: []
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);


  const getMessage = async () => {
    const message = await axios.post('http://localhost:3001/api/ping_message') 
    if(message) {
      dispatch({ type: GET_MESSAGE, payload: [message.data] })
    }
  }

  const deleteMessages = () => {
    dispatch({type: DELETE_MESSAGES});
  }

  return (
    <ChatContext.Provider
      value={{
        messages: state.currentChatMessages,
        getMessage,
        deleteMessages
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;