import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Favoritos.module.scss";
import { getMedicosFavoritos } from "./api.simulada";
import React, { useEffect, useState } from "react";

type Medico = {
  id: number;
  nome: string;
  especialidade?: string;
  email?: string;
  telefone?: string;
  crm?: string;
  preco_consulta?: string;
};

export default function Favoritos() {
  const [medicos, setMedicos] = useState<Medico[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMedicosFavoritos();
      setMedicos(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Cabecalho 
        titulo="Médicos Favoritos"
      />
      <div className={style.Favoritos}>
        <h1 className="titulo__favoritos">Médicos Favoritos</h1>
      </div>
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
