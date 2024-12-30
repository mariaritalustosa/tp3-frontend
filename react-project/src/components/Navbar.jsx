import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-links">
      <li><Link to="/anuncios">Anúncios</Link></li>
      <li><Link to='/chat'>Chat</Link></li>
      <li><Link to='/favoritos'>Favoritos</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/cadastro">Cadastro</Link></li>
      <li><Link to="/busca">Buscar</Link></li>
    </ul>
  </nav>
  
  );
};

export default Navbar;
