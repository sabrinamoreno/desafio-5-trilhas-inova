import fotoPadrao from "../../../../assets/CallMed/foto.png";
import style from "./ConsultaCard.module.scss";
import { Consulta } from "../../../../types/consultas"
import star from "../../../../assets/CallMed/star2.png";

type ConsultaCardProps = {
  consulta: Consulta;
  onDesmarcarConsulta: (id: number) => void;
  onFavoritarMedico: (id: number) => void;
  getStatusColor: (status: Consulta['status']) => string;
};

export const ConsultaCard = ({ 
  consulta,
  onDesmarcarConsulta,
  onFavoritarMedico,
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
        <h4 className={style.consulta__medico}>{consulta.medico_nome}</h4>
      
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
            
          if (!consulta.agendamento_id) {
            console.error('Erro: agendamento_id está undefined!');
            return;
          }
            
          onDesmarcarConsulta(consulta.agendamento_id);
        }}
        className={style.consulta__botaoDesmarcar}
        aria-label="Desmarcar"
      >
        Desmarcar
      </button>
    )}

    {consulta.status === 'realizada' && (
      <button
        onClick={() => {

          onFavoritarMedico(consulta.medico_id);
        }}
        className={style.consulta__botaoFavorito}
        aria-label="Favoritar"
      >
        <img className={style.consulta__favoritoIcone} src={star} alt="Favoritar" />
        Favoritar
      </button>
    )}

  </div>
);