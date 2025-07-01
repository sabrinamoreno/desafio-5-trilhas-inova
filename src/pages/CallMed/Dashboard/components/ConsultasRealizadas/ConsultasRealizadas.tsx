import { useEffect, useState } from 'react';
import Realizadas from '../../../../../assets/CallMed/realizadas.png';
import style from '../Consultas.module.scss';
import axios from 'axios';

function ConsultasRealizadas() {

    const [quantidadeRealizadas, setQuantidadeRealizadas] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        axios
            .get("https://nisystem.vps-kinghost.net/api/consultas", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const consultasRealizadas = response.data.filter(
                    (consulta: any) => consulta.status.toLowerCase() === "realizada"
                );
                setQuantidadeRealizadas(consultasRealizadas.length);
            })
            .catch((error) => {
                console.error("Erro ao buscar consultas realizadas:", error);
                alert("Erro ao buscar consultas realizadas.");
            });
    }, []);

    const textoConsulta = quantidadeRealizadas === 1 ? "Consulta Realizada" : "Consultas Realizadas";

    return (
        <div className={style.agendadas}>

            <img 
            className={`${style.agendadas__imagem} ${style.realizadas__icone}`} 
            alt="Ícone de consultas realizadas"
            src={Realizadas} 
            />

            <div className={style.agendadas__container}>
                <h4 className={style.agendadas__container__numero}>{quantidadeRealizadas}</h4>
                <p className={style.agendadas__container__texto}>{textoConsulta}</p>
            </div>
        </div>
    )


}

export default ConsultasRealizadas;