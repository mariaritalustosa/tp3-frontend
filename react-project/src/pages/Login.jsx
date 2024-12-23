import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required />
        <br />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" required />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
