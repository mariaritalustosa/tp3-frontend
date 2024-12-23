import React from 'react';

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome" required />
        <br />
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required />
        <br />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" required />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
