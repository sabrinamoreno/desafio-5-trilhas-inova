import { useState } from "react";
import style from "./FormularioCadastro.module.scss";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          required
        />

        <input
          className={style.cadastro__formulario__email}
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={style.cadastro__formulario__nascimento}
          type="text"
          placeholder="Data de nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(formatarData(e.target.value))}
          maxLength={10}
          required
        />

        <input
          className={style.cadastro__formulario__senha}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <input
          className={style.cadastro__formulario__confirmarSenha}
          type="password"
          placeholder="Confirme a senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        <button className={style.cadastro__formulario__botao} type="submit">
          Cadastrar-se
        </button>
      </form>
    </section>
  );
}

export default FormularioCadastro;