import { useState, useEffect } from 'react';
import fotoPadrao from "../../../../assets/CallMed/foto.png";
import { Consulta } from '../../../../types/consultas'


export const useConsultas = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        agendamento_id: consulta.agendamento_id,
        medico_nome: consulta.medico_nome || 'Médico não informado',
        especialidade: consulta.especialidade || 'Especialidade não informada',
        data: formatarDataParaExibicao(consulta.data),
        hora: consulta.hora || 'Horário não informado',
        status: consulta.status || 'Agendada',
        foto: consulta.foto || fotoPadrao,
        preco_consulta: consulta.preco_consulta || 0,
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

  useEffect(() => {
    fetchConsultas();
  }, []);

  const handleDesmarcarConsulta = async (id: number | string) => {
    if (!id) {
      setError('ID da consulta inválido');
      return;
    }

    try {
      const token_local = localStorage.getItem('token');
      
      const resposta = await fetch(`http://nisystem.vps-kinghost.net/api/consultas/del/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token_local}`,
          'Content-Type': 'application/json'
        }
      });

      if (!resposta.ok) {
        throw new Error('Falha ao cancelar consulta');
      }

      setConsultas(consultas.map(consulta => 
        consulta.agendamento_id === id ? { ...consulta, status: 'cancelada' } : consulta
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao cancelar consulta');
      console.error('Erro ao cancelar consulta:', err);
    }
  };

  const handleToggleFavorito = (id: number | string) => {
    setConsultas(consultas.map(consulta => 
      consulta.agendamento_id === id ? { ...consulta, favorito: !consulta.favorito } : consulta
    ));
  };

  return {
    consultas,
    loading,
    error,
    handleDesmarcarConsulta,
    handleToggleFavorito,
    refetch: fetchConsultas
  };
};

const formatarDataParaExibicao = (dataString: string) => {
  try {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  } catch {
    return 'Data inválida';
  }
};