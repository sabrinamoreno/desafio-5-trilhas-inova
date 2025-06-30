import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Dashboard.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {

    const [nome, setNome] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        axios.get("http://nisystem.vps-kinghost.net/api/usuarios/me", {
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
        </div>

    )

}

export default Dashboard;