import { FaStar as SolidStar, FaRegStar as RegularStar } from 'react-icons/fa';
import { FiCalendar, FiClock, FiX } from 'react-icons/fi';
import fotoPadrao from "../../../../assets/CallMed/foto.png";
import style from "./ConsultaCard.module.scss";
import { Consulta } from "../../../../types/consultas"

type ConsultaCardProps = {
  consulta: Consulta;
  onToggleFavorito: (id: number) => void;
  onDesmarcarConsulta: (id: number) => void;
  getStatusColor: (status: Consulta['status']) => string;
};

export const ConsultaCard = ({ 
  consulta, 
  onDesmarcarConsulta,
  getStatusColor
}: ConsultaCardProps) => (
  <div className={style.consulta}>
    <img 
      src={consulta.foto || fotoPadrao} 
      alt={`Foto do(a) ${consulta.medico_nome}`} 
      className={style.consulta__foto}
      onError={(e) => {
        (e.target as HTMLImageElement).src = fotoPadrao;
      }}
    />
    
    <div className={style.consulta__detalhes}>
      <div className={style.consulta__cabecalho}>
        <h4 className={style.consulta__medico}>{consulta.medico_nome}</h4>
      </div>
      
      <p className={style.consulta__especialidade}>{consulta.especialidade}</p>
      
      <div className={style.consulta__dataHora}>
        <span>{`${consulta.data} às ${consulta.hora}`}</span>
      </div>
      
      <div 
        className={style.consulta__status}
        style={{ backgroundColor: getStatusColor(consulta.status) }}
      >
        {consulta.status}
      </div>
    </div>

    {consulta.status === 'agendada' && (
        <button
            onClick={() => {
            // Adicione este console.log para verificar o ID
            console.log('[DEBUG] ID ao desmarcar:', consulta.agendamento_id);
            
            if (!consulta.agendamento_id) {
                console.error('Erro: agendamento_id está undefined!');
                return;
            }
            
            onDesmarcarConsulta(consulta.agendamento_id);
            }}
            className={style.consulta__botao}
            aria-label="Desmarcar"
        >
            Desmarcar
        </button>
    )}
  </div>
);