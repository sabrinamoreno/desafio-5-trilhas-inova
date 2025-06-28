import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Perfil.module.scss"

function Perfil (){

    return (
        <div className={style.perfil}>
            <Cabecalho
                titulo="Meu Perfil"
            />
        </div>
    )
}

export default Perfil;