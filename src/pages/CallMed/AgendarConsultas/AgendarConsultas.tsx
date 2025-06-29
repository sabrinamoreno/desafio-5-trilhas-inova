import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./AgendarConsultas.module.scss"

function AgendarConsultas() {

    return (
        <div className={style.agendar}>
            <Cabecalho
                titulo="Agendar Consultas"
            />

            
        </div>
    )
}

export default AgendarConsultas;