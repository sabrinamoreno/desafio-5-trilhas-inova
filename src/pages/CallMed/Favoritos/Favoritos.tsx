import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Favoritos.module.scss";
import { getMedicosFavoritos } from "./api.simulada";
import "./api.simulada";
import React, { useEffect, useState } from "react";

function Favoritos() {
  export default function App() {
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const data = await getMedicosFavoritos();
        setMedicos(data);
      }
      fetchData();
    }, []);

    return (
      <>
        <div className={style.Favoritos}>
          <div className="titulo"></div>
          <h1 className="titulo__favoritos">Médicos Favoritos</h1>
          {/* <img src="colocar a estrela que botei em callmed/favoritos" alt="Favoritos" /> */}
        </div>
        {/* Lista de médicos  */}
        <div className="lista-medicos">
          {medicos.map((medico) => (
            <div className="card" key={medico.id}>
              <div className="info">
                <h2 className="medico-nome">{medico.nome}</h2>
                <p className="especialidade">{medico.especialidade}</p>
              </div>
              <button className="botao" type="submit">
                Agendar Consulta
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Favoritos;
