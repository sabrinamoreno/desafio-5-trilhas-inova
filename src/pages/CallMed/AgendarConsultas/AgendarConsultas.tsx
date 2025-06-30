import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./AgendarConsultas.module.scss"
import DadosPaciente from "./components/DadosPaciente/DadosPaciente";
import DetalhesConsulta from "./components/DetalhesConsulta/DetalhesConsulta";

function AgendarConsultas() {

    return (
        <div className={style.agendar}>
            <Cabecalho
                titulo="Agendar Consultas"
            />
            <div className={style.conteudo}>
            <DadosPaciente />
            <DetalhesConsulta />
            </div>
        </div>
    )
}

export default AgendarConsultas;