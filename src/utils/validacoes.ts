const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validarCampos = (
  nome: string,
  email: string,
  nascimento: string,
  senha: string,
  confirmarSenha: string
) => {
  const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  return {
    nome: nome.trim() === "" ? "Preencha seu nome completo" : "",
    email: !emailRegex.test(email) ? "E-mail inválido" : "",
    nascimento: !dataRegex.test(nascimento) ? "Data no formato DD/MM/AAAA" : "",
    senha: senha.length < 6 ? "Mínimo de 6 caracteres" : "",
    confirmarSenha: senha !== confirmarSenha ? "Senhas diferentes" : "",
  };
};

export const validarLogin = (email: string, senha: string) => {
  return {
    email: !emailRegex.test(email) ? "E-mail inválido" : "",
    senha: senha.length < 6 ? "A senha deve ter pelo menos 6 caracteres" : "",
  };
};

export const validarEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validarCPF = (cpf: string) => /^\d{11}$/.test(cpf);
