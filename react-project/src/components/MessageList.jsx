import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
      {messages.map((msg) => (
        <Message key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
};

export default MessageList;
