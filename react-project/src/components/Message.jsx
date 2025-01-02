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
          backgroundColor: isSender ? 'white' : 'rgb(2, 2, 44)',
          color: isSender ? 'black' : 'white',
          maxWidth: '70%',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Message;

