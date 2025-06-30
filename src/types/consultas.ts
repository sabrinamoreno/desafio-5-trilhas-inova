export type Consulta = {
  agendamento_id: number;
  medico_nome: string;
  especialidade: string;
  data: string;
  hora: string;
  status: 'agendada' | 'realizada' | 'cancelada';
  preco_consulta: number;
  foto?: string;
  favorito: boolean;
};