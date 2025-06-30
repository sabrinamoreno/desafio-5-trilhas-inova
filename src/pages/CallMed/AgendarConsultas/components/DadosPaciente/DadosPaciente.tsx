import { useEffect, useState } from "react";
import style from "./DadosPaciente.module.scss";
import axios from "axios";


function DadosPaciente() {

    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");

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
                setCPF(response.data.cpf);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados do usuário:", error);
            });
    }, []);

    return (
        <div className={style.paciente}>
            <h2 className={style.paciente__titulo}>Dados do Paciente</h2>
            <div className={style.paciente__campos}>
                <label className={style.paciente__campos__label}>Nome Completo
                    <input
                        className={style.paciente__campos__input}
                        value={nome || "Carregando"}
                        type="text" 
                        onChange={(e) => setNome(e.target.value)}
                        />
                </label>

                <label className={style.paciente__campos__label}>CPF
                    <input
                        className={style.paciente__campos__input}
                        value={cpf || "Carregando"}
                        type="text" 
                        onChange={(e) => setCPF(e.target.value)}
                        />
                </label>
            </div>
        </div>
    )

}

export default DadosPaciente;