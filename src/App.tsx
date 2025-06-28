import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CallMed from './pages/CallMed/CallMed';
import Perfil from './pages/CallMed/Perfil/Perfil';
import Consultas from './pages/CallMed/Consultas/Consultas';
import AgendarConsultas from './pages/CallMed/AgendarConsultas/AgendarConsultas';
import Favoritos from './pages/CallMed/Favoritos/Favoritos';


function App() {
   return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/callmed" element={<CallMed />} />
      <Route path="/callmed/perfil" element={<Perfil />} />
      <Route path="/callmed/consultas" element={<Consultas />} />
      <Route path="/callmed/agendarconsultas" element={<AgendarConsultas />} />
      <Route path="/callmed/favoritos" element={<Favoritos />} />
      
    </Routes>
  );
}

export default App;
