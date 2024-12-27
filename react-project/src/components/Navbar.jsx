import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-links">
      <li><a href="/anuncios">Anúncios</a></li>
      <li><a href='/chat'>Chat</a></li>
      <li><a href='/favoritos'>Favoritos</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/cadastro">Cadastro</a></li>
      <li><a href="/buscar">Buscar</a></li>
    </ul>
  </nav>
  
  );
};

export default Navbar;
