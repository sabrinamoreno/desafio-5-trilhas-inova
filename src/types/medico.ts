export interface Medico {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  crm: string;
  especialidade: string;
  preco_consulta: number;
  foto?: string;
}