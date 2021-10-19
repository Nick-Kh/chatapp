import './App.css';
import ChatList from './components/chat/chat-list/ChatList';
import Header from './components/header/Header';
import ChatState from './components/context/chat/chatActions';


const App = () => {
  return (
    <div className="App">
      <ChatState>
        <Header />
        <ChatList />
      </ChatState>
    </div>
  );
}

export default App;
