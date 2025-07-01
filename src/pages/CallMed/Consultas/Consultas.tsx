import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecalho from "../components/Cabecalho/Cabecalho";
import { ConsultaCard } from './components/ConsultaCard';
import { useConsultas } from './hooks/useConsultas';
import style from "./Consultas.module.scss";
import { Consulta } from "../../../types/consultas"

export default function Consultas() {
  const navigate = useNavigate();
  const {
    consultas,
    loading,
    handleDesmarcarConsulta,
    handleFavoritarMedico,
  } = useConsultas();

  const handleAgendarConsulta = () => {
    navigate('/callmed/agendarconsultas');
  };

  const getStatusColor = (status: Consulta['status']) => {
    switch(status) {
      case 'agendada': return '#12B76A';
      case 'cancelada': return '#F04438';
      case 'realizada': return '#667085';
      default: return '#667085';
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className={style.consultas}>
      <div className={style.consultas__topo}>
        <Cabecalho titulo="Minhas Consultas" />
      </div>
      
      <div className={style.consultas__container}>
        <div className={style.consultas__cabecalho}>
          <h3 className={style.consultas__titulo}>
            Todas as Consultas
          </h3>
          <AgendarConsultaButton onClick={handleAgendarConsulta} />
        </div>

        {consultas.length === 0 ? (
          <EmptyState onAgendarConsulta={handleAgendarConsulta} />
        ) : (
          <div className={style.consultas__lista}>
            {consultas.map((consulta) => (
              <ConsultaCard
                key={consulta.agendamento_id}
                consulta={consulta}
                onFavoritarMedico={handleFavoritarMedico}
                onDesmarcarConsulta={handleDesmarcarConsulta}
                getStatusColor={getStatusColor}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const LoadingState = () => (
  <div className={style.consultas}>
    <div className={style.consultas__topo}>
      <Cabecalho titulo="Minhas Consultas" />
    </div>
    <div className={style.consultas__carregando}>
      <p>Carregando consultas...</p>
    </div>
  </div>
);

const EmptyState = ({ onAgendarConsulta }: { onAgendarConsulta: () => void }) => (
  <div className={style.consultas__vazio}>
    <p>Nenhuma consulta agendada</p>
    <button 
      onClick={onAgendarConsulta}
      className={style.consultas__botaoPrimario}
    >
      Agendar Nova Consulta
    </button>
  </div>
);

const AgendarConsultaButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={style.consultas__botaoPrimario}
  >
    Agendar Nova Consulta
  </button>
);