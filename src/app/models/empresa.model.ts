export interface Empresa {
  key: string;
  abertura: string;
  situacao: string;
  tipo: string;
  nome: string;
  fantasia: string;
  porte: string;
  naturezaJuridica: string;
  atividadePrincipal: {
    code: string;
    text: string;
  };
  logradouro: string;
  numero: string;
  municipio: string;
  bairro: string;
  uf: string;
  cep: string;
  email: string;
  telefone: string;
  cnpj: string;
  capitalSocial: string;
  usuario: {
    key: string;
    email: string;
    nomeCompleto: string;
  };
  createIn: Date;
  updateIn: Date;
}
