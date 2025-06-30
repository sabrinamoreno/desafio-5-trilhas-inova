import { useEffect, useState } from "react";
import style from "./ListaFavoritos.module.scss";
import favoritos from "../../../../../assets/CallMed/star.png";
import Perfil from "../../../../../assets/CallMed/perfilFavoritos.png";
import Delete from "../../../../../assets/CallMed/delete.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Medico = {
  id: number;
  nome: string;
  especialidade?: string;
  email?: string;
  telefone?: string;
  crm?: string;
  preco_consulta?: string;
};

function ListaFavoritos() {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const navigate = useNavigate();


  function handleAgendarConsulta(medico: Medico) {
    navigate("/callmed/agendarconsultas", {
      state: {
        medicoId: medico.id,
        nome: medico.nome,
        especialidade: medico.especialidade,
      },
    });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios
      .get("http://nisystem.vps-kinghost.net/api/medicos/favoritos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMedicos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do médico:", error);
        alert("Erro ao buscar dados do médico.");
      });
  }, []);

  const deletePessoa = (id: number) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .delete(`http://nisystem.vps-kinghost.net/api/medicos/favoritos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setMedicos((prev) => prev.filter((medico) => medico.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao deletar médico favorito:", error);
      });
  }

  return (
    <div className={style.conteudo}>
      <div className={style.favoritos}>
        <h1 className={style.favoritos__titulo}>Médicos Favoritos</h1>
        <img src={favoritos} alt="estrela do(s) medico(a) favorito(a)" />
      </div>
      <div className={style.lista}>
        {medicos.map((medico) => (
          <div className={style.lista__medicos} key={medico.id}>
            <div className={style.lista__medicos__informacoes}>
              <img className={style.foto} src={Perfil} />
              <div className={style.informacoes}>
                <h2 className={style.informacoes__nome}>{medico.nome}</h2>
                <p className={style.informacoes__especialidade}>
                  {medico.especialidade}
                </p>
              </div>
              <img className={style.informacoes__delete} src={Delete} onClick={() => deletePessoa(medico.id)} />
            </div>
            <button
              className={style.botao}
              type="button"
              onClick={() => handleAgendarConsulta(medico)}
            >
              Agendar Consulta
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaFavoritos;
