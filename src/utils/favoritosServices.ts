import axios from "axios";

const API = "https://nisystem.vps-kinghost.net/api";
const getToken = () => localStorage.getItem("token");

export const buscarFavoritos = () => {
  const token = getToken();
  return axios.get(`${API}/medicos/favoritos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const desfavoritarMedico = (id: number) => {
  const token = getToken();
  return axios.delete(`${API}/medicos/desfavoritar/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
