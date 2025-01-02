import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        right: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escreva sua mensagem..."
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginRight: '10px',
        }}
      />
      <button
        onClick={handleSend}
        style={{
          backgroundColor: 'rgb(2, 2, 44)',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '50px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default MessageInput;
