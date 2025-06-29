import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Dashboard.module.scss";

function Dashboard() {

    return (
        <div className={style.dashboard}>
            <Cabecalho
                titulo="Olá, Maria Silva"
                subtitulo="Bem-vindo ao seu painel de telemedicina"
            />
        </div>

    )

}

export default Dashboard;