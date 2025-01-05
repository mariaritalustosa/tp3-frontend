import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Anuncios from './pages/Anuncios';
import BuscaPage from './pages/BuscaPage';
import ChatPage from './pages/ChatPage';
import AnuncioDetails from './pages/AnuncioDetails';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="centered-heading">Bem-vindo ao Republikanos</h1>} />
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/busca" element={<BuscaPage/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
