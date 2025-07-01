import axios from "axios";


const API = "https://nisystem.vps-kinghost.net/api";
const token = localStorage.getItem("token");

export const buscarAreas = () =>
  axios.get(`${API}/areas`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const buscarMedicosPorArea = (areaId: string) =>
  axios.get(`${API}/medicos/area/${areaId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const buscarHorariosPorMedico = (medicoId: string) =>
  axios.get(`${API}/medicos/disponibilidade/${medicoId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const agendarConsulta = (medicoId: number, disponibilidadeId: number) =>
  axios.post(
    `${API}/consultas/agendar`,
    {
      medico_id: medicoId,
      disponibilidade_id: disponibilidadeId,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
