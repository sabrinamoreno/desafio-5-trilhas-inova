import style from "./ProximasConsultas.module.scss"
import perfil from "../../../../../assets/CallMed/perfilFavoritos.png"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Consulta = {
    agendamento_id: number;
    medico_nome: string;
    especialidade: string;
    data: string;
    hora: string;
    status: string;
    preco_consulta: string;
}


function ProximasConsultas() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://nisystem.vps-kinghost.net/api/consultas", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const consultasFiltradas = response.data.filter(
          (consulta: Consulta) => consulta.status.toLowerCase() === "agendada"
        );
        setConsultas(consultasFiltradas);
      })
    
      .catch((error) => {
        console.error("Erro ao buscar consultas", error);
        alert("Erro ao buscar suas consultas");
      });
  }, []);

  return (
    <div className={style.conteudo}>
      <h2 className={style.conteudo__titulo}>Próximas Consultas</h2>
      <div className={style.conteudo__lista}>
        {consultas.map((consulta) => {
          const dataFormatada = new Date(consulta.data).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });

          const horaFormatada = consulta.hora.slice(0, 5); 

          return (
            <div className={style.conteudo__lista__consulta} key={consulta.agendamento_id}>
              <div className={style.consulta}>
                <img className={style.consulta__imagem} src={perfil} />
                <div className={style.consulta__container}>
                  <h3 className={style.consulta__contatiner__nome}>{consulta.medico_nome}</h3>
                  <p className={style.consulta__contatiner__texto}>{consulta.especialidade}</p>
                  <p className={style.consulta__contatiner__texto}>
                    {dataFormatada} às {horaFormatada}
                  </p>
                </div>
              </div>
              <button 
              className={style.botao} 
              type="button"
              onClick={() => navigate("/callmed/consultas")}
              >
                Ver Detalhes
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProximasConsultas;