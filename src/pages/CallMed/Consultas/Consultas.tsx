import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Consultas.module.scss";
import fotoPadrao from "../../../assets/CallMed/foto.png";
import { FaStar as SolidStar, FaRegStar as RegularStar } from 'react-icons/fa';


type Consulta = {
  id: number;
  medico: string;
  especialidade: string;
  data: string;
  horario: string;
  status: 'Agendada' | 'Realizada' | 'Cancelada';
  foto?: string;
  favorito: boolean;
};

export default function Consultas() {
  const navigate = useNavigate();
  const [consultas, setConsultas] = useState<Consulta[]>([
    {
      id: 1,
      medico: "Dr. João Silva",
      especialidade: "Cardiologia",
      data: "15/10/2023",
      horario: "14:30",
      status: "Agendada",
      foto: fotoPadrao,
      favorito: false
    },
    {
      id: 2,
      medico: "Dra. Maria Souza",
      especialidade: "Dermatologia",
      data: "20/10/2023",
      horario: "10:15",
      status: "Agendada",
      foto: fotoPadrao,
      favorito: false
    },
    {
      id: 3,
      medico: "Dr. Carlos Oliveira",
      especialidade: "Ortopedia",
      data: "05/10/2023",
      horario: "16:45",
      status: "Realizada",
      foto: fotoPadrao,
      favorito: false
    },
  ]);

  const handleDesmarcarConsulta = (id: number) => {
    setConsultas(consultas.map(consulta => 
      consulta.id === id ? { ...consulta, status: 'Cancelada' } : consulta
    ));
  };

  const handleToggleFavorito = (id: number) => {
    setConsultas(consultas.map(consulta => 
      consulta.id === id ? { ...consulta, favorito: !consulta.favorito } : consulta
    ));
  };

  const handleAgendarConsulta = () => {
    navigate('/callmed/agendarconsultas');
  };

  const formatarData = (data: string, horario: string) => {
    return `${data} às ${horario}`;
  };

  return (
    <div className={style.consultas}>
      <div className={style.consultas__topo}>
        <Cabecalho titulo="Minhas Consultas" />
      </div>
      
      <div className={style.consultas__container}>
        <div className={style.consultas__cabecalho}>
          <h3 className={style.consultas__titulo}>Todas as Consultas</h3>
          <button 
            onClick={handleAgendarConsulta}
            className={style.consultas__botaoPrimario}
          >
            Agendar Nova Consulta
          </button>
        </div>

        <div className={style.consultas__lista}>
          {consultas.map((consulta) => (
            <div key={consulta.id} className={style.consulta}>
              <img 
                src={consulta.foto || fotoPadrao} 
                alt={`Foto do(a) ${consulta.medico}`} 
                className={style.consulta__foto}
              />
              
              <div className={style.consulta__detalhes}>
                <h4 className={style.consulta__medico}>{consulta.medico}</h4>
                <p className={style.consulta__especialidade}>{consulta.especialidade}</p>
                <p className={style.consulta__dataHora}>{formatarData(consulta.data, consulta.horario)}</p>
                <p 
                  className={style.consulta__status}
                  style={{ 
                    backgroundColor: consulta.status === 'Realizada' ? '#667085' : 
                                   consulta.status === 'Cancelada' ? '#F04438' : '#12B76A'
                  }}
                >
                  {consulta.status}
                </p>
              </div>

              {consulta.status === 'Agendada' ? (
                <button
                  onClick={() => handleDesmarcarConsulta(consulta.id)}
                  className={style.consulta__botao}
                >
                  Desmarcar
                </button>
              ) : (
                <button
                  onClick={() => handleToggleFavorito(consulta.id)}
                  className={`${style.consulta__botao} ${style.consulta__botaoFavorito}`}
                >
                  {consulta.favorito ? <SolidStar color="#FFC107" /> : <RegularStar />}
                  Favoritar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}