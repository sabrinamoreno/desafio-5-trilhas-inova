import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tentativa de login errada!: ${email}`);
  };

  return (
    <div className="login-page">
      <header className="header">
        <h1>CallMed Atendimentos</h1>
      </header>

      <main className="login-form">
        <h2>Entre em sua conta</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Endereço de email
            <input
              type="email"
              placeholder="Endereço de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>

          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" id="botaoLogin">
            Entrar
          </button>
        </form>

        <p className="register-text">
          Não tem uma conta? <a href="#">Clique aqui</a>
        </p>
      </main>
    </div>
  );
}

export default App;
