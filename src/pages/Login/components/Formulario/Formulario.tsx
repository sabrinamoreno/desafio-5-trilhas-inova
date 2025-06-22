import { useState } from "react";
import UserCheck from '../../../../assets/Login/User check.png';

function Formulario() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Tentativa de login errada!: ${email}`);
    };

    return (
        <section className="login">
            <form className="login__formulario" onSubmit={handleSubmit}>
                <label className="login__formulario__label">
                    Endereço de email
                    <input className="login__formulario__email"
                        type="email"
                        placeholder="Endereço de email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label className="login__formulario__label">
                    Senha
                    <input className="login__formulario__senha"
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </label>

                <div className="login__formulario__esqueciSenha">
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button className="login__formulario__botao" type="submit" id="botaoLogin">
                    <img src={UserCheck} />
                    Entrar
                </button>
            </form>

            <p className="login__formulario__conta">
                Não tem uma conta? <a href="#">Clique aqui</a>
            </p>
        </section>
    )

}

export default Formulario;