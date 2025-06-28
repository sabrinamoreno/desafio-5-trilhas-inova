import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import BaseCallMed from './pages/CallMed/BaseCallMed';
import Perfil from './pages/CallMed/Perfil/Perfil';
import Consultas from './pages/CallMed/Consultas/Consultas';
import AgendarConsultas from './pages/CallMed/AgendarConsultas/AgendarConsultas';
import Favoritos from './pages/CallMed/Favoritos/Favoritos';
import Dashboard from './pages/CallMed/Dashboard/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/callmed" element={<BaseCallMed />}>
        <Route path="/callmed/dashboard" element={<Dashboard />} />
        <Route path="/callmed/perfil" element={<Perfil />} />
        <Route path="/callmed/consultas" element={<Consultas />} />
        <Route path="/callmed/agendarconsultas" element={<AgendarConsultas />} />
        <Route path="/callmed/favoritos" element={<Favoritos />} />
      </Route>

    </Routes>
  );
}

export default App;
