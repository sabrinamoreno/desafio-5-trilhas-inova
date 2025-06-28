import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Perfil.module.scss"

function Perfil (){

    return (

        <div className={style.perfil}>
            <Cabecalho
                titulo="Meu Perfil"
            />
            <h1>Perfil</h1>

            <p>Informações Pessoais</p>

            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" />

            <label>E-mail</label>
            <input type="email" placeholder="Digite seu email" />   

            <label>CPF</label>
            <input type="number" placeholder="Digite seu CPF" />

        </div>
    )
}

export default Perfil;