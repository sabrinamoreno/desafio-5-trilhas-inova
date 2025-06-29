import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Favoritos.module.scss"

function Favoritos (){

    return (
        <div className={style.favoritos}>
            <Cabecalho
                titulo="Médicos Favoritos"
            />
        </div>
    )
}

export default Favoritos;