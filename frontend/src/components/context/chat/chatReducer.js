import {
  SET_CURRENT_CHAT,
  GET_MESSAGE,
  DELETE_MESSAGES
} from './chatActionTypes';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.payload
      };
    case GET_MESSAGE:
      return {
        ...state,
        currentChatMessages: [...state.currentChatMessages, ...action.payload]
      };
    case DELETE_MESSAGES:
      return {
        ...state,
        currentChatMessages: []
      };
   
    default:
      return state;
  }
};