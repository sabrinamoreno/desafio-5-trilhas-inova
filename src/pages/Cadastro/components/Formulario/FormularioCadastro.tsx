import { useState } from "react";
import style from "./FormularioCadastro.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const converterParaISO = (data: string) => {
  const [dia, mes, ano] = data.split("/");
  return `${ano}-${mes}-${dia}`;
};



function FormularioCadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erros, setErros] = useState({
    nome: "",
    email: "",
    nascimento: "",
    senha: "",
    confirmarSenha: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  const formatarData = (value: string) => {
    const digits = value.replace(/\D/g, "");
    let formattedValue = digits;

    if (digits.length > 2) {
      formattedValue = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    if (digits.length > 4) {
      formattedValue = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
    }

    return formattedValue;
  };

  const validarCampos = () => {
    return {
      nome: nome.trim() === "" ? "Preencha seu nome completo" : "",
      email: !emailRegex.test(email) ? "E-mail inválido" : "",
      nascimento: !dataRegex.test(nascimento) ? "Data no formato DD/MM/AAAA" : "",
      senha: senha.length < 6 ? "Mínimo de 6 caracteres" : "",
      confirmarSenha: senha !== confirmarSenha ? "Senhas diferentes" : "",
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novosErros = validarCampos();
    setErros(novosErros);

    const valido = Object.values(novosErros).every((erro) => erro === "");
    if (valido) {

      const payload = {
        nome,
        email,
        data_nascimento: converterParaISO(nascimento),
        senha
      };

      axios
        .post("http://nisystem.vps-kinghost.net/api/usuarios/auth/register", payload)
        .then((response) => {
          alert(response.data.mensagem || "Usuário registrado com sucesso!");
          setNome("");
          setEmail("");
          setNascimento("");
          setSenha("");
          setConfirmarSenha("");
          navigate("/login");
        })
        .catch((error) => {
          const mensagem =
            error.response?.data?.mensagem || "Erro ao registrar usuário.";
          alert(`Erro: ${mensagem}`);
        });
    }
  };

  return (
    <section className={style.cadastro}>
      <h1 className={style.cadastro__titulo}>Venha ser CallMed!</h1>
      <form className={style.cadastro__formulario} onSubmit={handleSubmit}>
        <input
          className={style.cadastro__formulario__nome}
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        {erros.nome && <p className={style.cadastro__error}>{erros.nome}</p>}

        <input
          className={style.cadastro__formulario__email}
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {erros.email && <p className={style.cadastro__error}>{erros.email}</p>}

        <input
          className={style.cadastro__formulario__nascimento}
          type="text"
          placeholder="Data de nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(formatarData(e.target.value))}
          maxLength={10}
        />
        {erros.nascimento && <p className={style.cadastro__error}>{erros.nascimento}</p>}

        <input
          className={style.cadastro__formulario__senha}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erros.senha && <p className={style.cadastro__error}>{erros.senha}</p>}

        <input
          className={style.cadastro__formulario__confirmarSenha}
          type="password"
          placeholder="Confirme a senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        {erros.confirmarSenha && <p className={style.cadastro__error}>{erros.confirmarSenha}</p>}

        <button className={style.cadastro__formulario__botao} type="submit">
          Cadastrar-se
        </button>
      </form>
    </section>
  );
}

export default FormularioCadastro;
