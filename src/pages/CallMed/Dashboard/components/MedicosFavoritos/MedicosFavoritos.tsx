import { useEffect, useState } from 'react';
import Favoritos from '../../../../../assets/CallMed/medicosfavoritos.png';
import style from '../Consultas.module.scss';
import axios from 'axios';

function MedicosFavoritos() {

    const [quantidadeFavoritos, setQuantidadeFavoritos] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        axios
            .get("http://nisystem.vps-kinghost.net/api/medicos/favoritos", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setQuantidadeFavoritos(response.data.length);
            })
            .catch((error) => {
                console.error("Erro ao buscar medicos favoritos:", error);
                alert("Erro ao buscar medicos favoritos");
            });
    }, []);

    const textoConsulta = quantidadeFavoritos === 1 ? "Médico Favorito" : "Médicos Favoritos";

    return (
        <div className={style.agendadas}>

            <img 
            className={`${style.agendadas__imagem} ${style.favoritos__icone}`} 
            alt="Ícone de médicos favoritos"
            src={Favoritos} 
            />

            <div className={style.agendadas__container}>
                <h4 className={style.agendadas__container__numero}>{quantidadeFavoritos || "Carregando"}</h4>
                <p className={style.agendadas__container__texto}>{textoConsulta}</p>
            </div>
        </div>
    )


}

export default MedicosFavoritos;