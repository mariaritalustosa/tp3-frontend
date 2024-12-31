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
    <div style={{ marginTop: '10px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escreva sua mensagem..."
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={handleSend} style={{ padding: '10px', marginLeft: '5px' }}>
        Enviar
      </button>
    </div>
  );
};

export default MessageInput;
