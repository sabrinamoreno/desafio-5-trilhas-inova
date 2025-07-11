import Formulario from "./components/Formulario/Formulario";
import Marca from '../../assets/Login/marca.png';
import style from "./Login.module.scss"
import { useEffect } from "react";


function Login() {

    useEffect(() => {
        document.body.classList.add(style.login__body);
        return () => document.body.classList.remove(style.login__body);
    }, []);

    return (
        <section className={style.principal}>
            <div className={style.principal__cabecalho}>
                <img src={Marca} alt="Logo CallMed" />
                <h1 className={style.principal__cabecalho__titulo}>CallMed Atendimentos</h1>
            </div>
            <Formulario />
        </section>
    )
}

export default Login;