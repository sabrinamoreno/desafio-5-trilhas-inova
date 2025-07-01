import Cabecalho from "../components/Cabecalho/Cabecalho";
import ConsultasAgendadas from "./components/ConsultasAgendadas/ConsultasAgendadas";
import ConsultasRealizadas from "./components/ConsultasRealizadas/ConsultasRealizadas";
import style from "./Dashboard.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import MedicosFavoritos from "./components/MedicosFavoritos/MedicosFavoritos";
import ProximasConsultas from "./components/ProximasConsultas/ProximasConsultas";

function Dashboard() {

    const [nome, setNome] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        axios.get("https://nisystem.vps-kinghost.net/api/usuarios/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setNome(response.data.nome);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados do usuário:", error);
            });
    }, []);



    return (
        <div className={style.dashboard}>
            <Cabecalho
                titulo={`Olá, ${nome || "..."}`}
                subtitulo="Bem-vindo ao seu painel de telemedicina"
            />
            <div className={style.dashboard__conteudo}>
                <div className={style.dashboard__conteudo__consultas}>
                <ConsultasAgendadas />
                <ConsultasRealizadas />
                <MedicosFavoritos />
                </div>
                <ProximasConsultas />
            </div>

        </div>

    )

}

export default Dashboard;