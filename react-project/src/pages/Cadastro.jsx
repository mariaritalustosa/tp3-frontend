import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastro.css';

const Cadastro = () => {
  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      <form className="cadastro-form">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" required />

        <button type="submit" className="cadastro-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
