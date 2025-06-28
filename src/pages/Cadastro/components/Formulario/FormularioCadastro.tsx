import { useState } from "react";


function FormularioCadastro (){

const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="cadastro">
      <form className="cadastro__formulario" onSubmit={handleSubmit}>
        <input
          className= "cadastro__formulario__nome"
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          className= "cadastro__formulario__nome"
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className= "cadastro__formulario__nome"
          type="date"
          placeholder="Data de nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
          required
        />

        <input
          className= "cadastro__formulario__nome"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <input
          className= "cadastro__formulario__nome"
          type="password"
          placeholder="Confirme a senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        <button className= "cadastro__formulario__botao" type="submit">Cadastrar-se!</button>
      </form>
    </section>
  );
}

export default FormularioCadastro;