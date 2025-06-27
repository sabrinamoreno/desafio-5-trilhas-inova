import { useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section>
      <h1>Venha ser CallMed!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={nome}
          type="string"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          className={email}
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={nascimento}
          type="date"
          placeholder="Data de nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
          required
        />

        <input
          className={senha}
          type="password"
          placeholder="Senha"
          value={email}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <input
          className={confirmarSenha}
          type="valid__password"
          placeholder="Confirme a senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        <button type="submit">Cadastrar-se!</button>
      </form>
    </section>
  );
}

export default Cadastro;
