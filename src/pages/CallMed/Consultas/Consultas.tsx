import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Consultas.module.scss"

function Consultas (){

    return (
        <div className={style.consultas}>
            <Cabecalho
                titulo="Minhas Consultas"
            />
        </div>
    )
}

export default Consultas;