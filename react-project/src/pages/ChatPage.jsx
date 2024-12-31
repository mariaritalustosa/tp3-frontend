import React from 'react';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Chat</h1>
      <ChatWindow />
    </div>
  );
};

export default ChatPage;
