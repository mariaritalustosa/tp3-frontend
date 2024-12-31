import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Oi, estou interessado no anúncio.', sender: 'interessado' },
    { id: 2, text: 'Olá, podemos conversar sobre a república?', sender: 'anunciante' },
  ]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { id: messages.length + 1, text, sender: 'interessado' }]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
