import { useEffect, useState } from "react";
import Agendadas from '../../../../../assets/CallMed/agendadas.png';
import style from '../Consultas.module.scss';
import axios from "axios";

function ConsultasAgendadas() {
  const [quantidadeAgendadas, setQuantidadeAgendadas] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://nisystem.vps-kinghost.net/api/consultas", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const consultasAgendadas = response.data.filter(
          (consulta: any) => consulta.status.toLowerCase() === "agendada"
        );
        setQuantidadeAgendadas(consultasAgendadas.length);
      })
      .catch((error) => {
        console.error("Erro ao buscar consultas agendadas:", error);
        alert("Erro ao buscar consultas agendadas.");
      });
  }, []);

  const textoConsulta = quantidadeAgendadas === 1 ? "Consulta Agendada" : "Consultas Agendadas";

  return (
    <div className={style.agendadas}>
      <img
        className={`${style.agendadas__imagem} ${style.agendadas__icone}`}
        src={Agendadas}
        alt="Ícone de consultas agendadas"
      />
      <div className={style.agendadas__container}>
        <h4 className={style.agendadas__container__numero}>
          {quantidadeAgendadas}
        </h4>
        <p className={style.agendadas__container__texto}>Consultas Agendadas</p>
      </div>
    </div>
  );
}

export default ConsultasAgendadas;
