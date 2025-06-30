export type Consulta = {
  agendamento_id: number;
  medico_nome: string;
  especialidade: string;
  data: string;
  hora: string;
  status: 'Agendada' | 'Realizada' | 'Cancelada';
  preco_consulta: number;
  foto?: string;
  favorito: boolean;
};