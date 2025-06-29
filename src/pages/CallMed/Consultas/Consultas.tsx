import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Consultas.module.scss";
import fotoPadrao from "../../../assets/CallMed/foto.png";
import { FaStar as SolidStar, FaRegStar as RegularStar } from 'react-icons/fa';
import { FiCalendar, FiClock, FiX, FiPlus, FiAlertCircle } from 'react-icons/fi';

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
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const token_local = localStorage.getItem('token');
        
        if (!token_local) {
          throw new Error('Usuário não autenticado');
        }

        const resposta = await fetch('http://nisystem.vps-kinghost.net/api/consultas', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token_local}`
          }
        });

        if (!resposta.ok) {
          throw new Error('Erro ao carregar consultas');
        }

        const data = await resposta.json();
        
        const consultasFormatadas = data.map((consulta: any) => ({
          id: consulta.id,
          medico: consulta.medico || 'Médico não informado',
          especialidade: consulta.especialidade || 'Especialidade não informada',
          data: formatarDataParaExibicao(consulta.data),
          horario: consulta.horario || 'Horário não informado',
          status: consulta.status || 'Agendada',
          foto: consulta.foto || fotoPadrao,
          favorito: false
        }));

        setConsultas(consultasFormatadas);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido');
        console.error('Erro ao buscar consultas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
  }, []);

  const formatarDataParaExibicao = (dataString: string) => {
    try {
      const data = new Date(dataString);
      return data.toLocaleDateString('pt-BR');
    } catch {
      return 'Data inválida';
    }
  };

  const handleDesmarcarConsulta = async (id: number) => {
    try {
      const token_local = localStorage.getItem('token');
      
      const resposta = await fetch(`http://nisystem.vps-kinghost.net/api/consultas/${id}/cancelar`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token_local}`,
          'Content-Type': 'application/json'
        }
      });

      if (!resposta.ok) {
        throw new Error('Falha ao cancelar consulta');
      }

      setConsultas(consultas.map(consulta => 
        consulta.id === id ? { ...consulta, status: 'Cancelada' } : consulta
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao cancelar consulta');
      console.error('Erro ao cancelar consulta:', err);
    }
  };

  const handleToggleFavorito = (id: number) => {
    setConsultas(consultas.map(consulta => 
      consulta.id === id ? { ...consulta, favorito: !consulta.favorito } : consulta
    ));
  };

  const handleAgendarConsulta = () => {
    navigate('/callmed/agendarconsultas');
  };

  const getStatusColor = (status: Consulta['status']) => {
    switch(status) {
      case 'Realizada': return '#667085';
      case 'Cancelada': return '#F04438';
      case 'Agendada': return '#12B76A';
      default: return '#667085';
    }
  };

  if (loading) {
    return (
      <div className={style.consultas}>
        <div className={style.consultas__topo}>
          <Cabecalho titulo="Minhas Consultas" />
        </div>
        <div className={style.consultas__carregando}>
          <p>Carregando consultas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.consultas}>
        <div className={style.consultas__topo}>
          <Cabecalho titulo="Minhas Consultas" />
        </div>
        <div className={style.consultas__container}>
          <FiAlertCircle className={style.consultas__erroIcone} />
          <p>{error}</p>
          <button 
            onClick={() => navigate('/login')}
            className={style.consultas__botaoPrimario}
          >
            Fazer Login
          </button>
        </div>
      </div>
    );
  }

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
            <FiPlus className={style.consultas__botaoIcone} />
            Agendar Nova Consulta
          </button>
        </div>

        {consultas.length === 0 ? (
          <div className={style.consultas__vazio}>
            <p>Nenhuma consulta agendada</p>
            <button 
              onClick={handleAgendarConsulta}
              className={style.consultas__botaoPrimario}
            >
              <FiPlus className={style.consultas__botaoIcone} />
              Agendar minha primeira consulta
            </button>
          </div>
        ) : (
          <div className={style.consultas__lista}>
            {consultas.map((consulta) => (
              <div key={consulta.id} className={style.consulta}>
                <img 
                  src={consulta.foto || fotoPadrao} 
                  alt={`Foto do(a) ${consulta.medico}`} 
                  className={style.consulta__foto}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fotoPadrao;
                  }}
                />
                
                <div className={style.consulta__detalhes}>
                  <div className={style.consulta__cabecalho}>
                    <h4 className={style.consulta__medico}>{consulta.medico}</h4>
                    <button 
                      onClick={() => handleToggleFavorito(consulta.id)}
                      className={style.consulta__favoritoBotao}
                      aria-label={consulta.favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    >
                      {consulta.favorito ? 
                        <SolidStar className={style.consulta__favoritoIcone} /> : 
                        <RegularStar className={style.consulta__favoritoIcone} />
                      }
                    </button>
                  </div>
                  
                  <p className={style.consulta__especialidade}>{consulta.especialidade}</p>
                  
                  <div className={style.consulta__info}>
                    <FiCalendar className={style.consulta__infoIcone} />
                    <span>{consulta.data}</span>
                  </div>
                  
                  <div className={style.consulta__info}>
                    <FiClock className={style.consulta__infoIcone} />
                    <span>{consulta.horario}</span>
                  </div>
                  
                  <div 
                    className={style.consulta__status}
                    style={{ backgroundColor: getStatusColor(consulta.status) }}
                  >
                    {consulta.status}
                  </div>
                </div>

                {consulta.status === 'Agendada' && (
                  <button
                    onClick={() => handleDesmarcarConsulta(consulta.id)}
                    className={style.consulta__botao}
                    aria-label="Desmarcar consulta"
                  >
                    <FiX className={style.consulta__botaoIcone} />
                    Desmarcar
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}