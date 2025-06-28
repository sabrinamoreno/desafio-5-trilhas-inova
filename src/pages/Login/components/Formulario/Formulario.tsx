import { useState } from "react";
import Eye from '../../../../assets/Login/Eye.png';
import style from "./Formulario.module.scss"

function Formulario() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Tentativa de login errada!: ${email}`);
    };

    return (
        <section className={style.login}>
            <h1 className={style.login__titulo}>Entre em sua conta</h1>
            <form className={style.login__formulario} onSubmit={handleSubmit}>
                
                <input className={style.login__formulario__email}
                    type="email"
                    placeholder="Endereço de email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input className={style.login__formulario__senha}
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <div className={style.login__formulario__esqueciSenha}>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button className={style.login__formulario__botao} type="submit" id="botaoLogin">
                    Entrar
                </button>
            </form>

            <p className={style.login__formulario__conta}>
                Não tem uma conta? <a href="/cadastro">Clique aqui</a>
            </p>
        </section>
    )

}

export default Formulario;