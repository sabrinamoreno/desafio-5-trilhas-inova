import axios from "axios";

const API = "https://nisystem.vps-kinghost.net/api";
const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
};

export const buscarUsuario = () => {
  return axios.get(`${API}/usuarios/me`, { headers });
};

export const atualizarUsuario = (dados: { nome: string; email: string; cpf: string }) => {
  return axios.put(`${API}/usuarios/atualizar`, dados, { headers });
};
