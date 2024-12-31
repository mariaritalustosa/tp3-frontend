import React from 'react';

const Message = ({ text, sender }) => {
  const isSender = sender === 'interessado';
  return (
    <div
      style={{
        textAlign: isSender ? 'right' : 'left',
        margin: '10px 0',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: isSender ? '#d1e7dd' : '#f8d7da',
          maxWidth: '70%',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Message;
