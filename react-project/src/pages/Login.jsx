import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h1 className="text-center mb-4">Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
        <p className="text-center mt-3">
          <a href="/register" className="text-decoration-none">Não tem uma conta? Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
