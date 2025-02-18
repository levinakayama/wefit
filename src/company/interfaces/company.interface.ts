export interface NewCompany {
  id: number;
  cnpj: string;
  cpfResponsavel: string;
  nome: string;
  celular: string;
  telefone?: string;
  email: string;
  confirmarEmail: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  cidade: string;
  bairro: string;
  estado: string;
  termosAceitos: boolean;
}
