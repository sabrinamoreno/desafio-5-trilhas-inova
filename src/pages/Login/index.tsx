import Formulario from "./components/Formulario/Formulario";
import Marca from '../../assets/Login/marca.png';
import style from "./Login.module.scss"


function Login() {

    return (
        <body className={style.login}>
            <section className={style.principal}>
                <div className={style.principal__cabecalho}>
                    <img src={Marca} alt="Logo CallMed" />
                    <h1 className={style.principal__cabecalho__titulo}>CallMed Atendimentos</h1>
                </div>
                <Formulario />
            </section>
        </body>
    )
}

export default Login;