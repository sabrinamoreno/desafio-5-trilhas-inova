import Formulario from "./components/Formulario/Formulario";
import Marca from '../../assets/Login/marca.png';


function Login (){

    return(
        <main className="principal">
            <div className="principal__cabecalho">
                <img src={Marca} />
                <h1 className="principal__cabecalho__titulo">CallMed Atendimentos</h1>
            </div>
            <Formulario />
        </main>
    )
}

export default Login;