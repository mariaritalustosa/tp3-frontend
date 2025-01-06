import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastro.css';
import api from '../services/api';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await api.post('/api/cadastro', formData); 
      console.log('Cadastro realizado:', response.data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro ao realizar cadastro. Tente novamente.');
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="cadastro-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
