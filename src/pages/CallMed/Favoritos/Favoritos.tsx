import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Favoritos.module.scss";
import { getMedicosFavoritos } from "./api.simulada";
import React, { useEffect, useState } from "react";
import favoritos from "../../../assets/CallMed/star.png";

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
      <Cabecalho titulo="Médicos Favoritos" />
      <div className={style.Favoritos}>
        <h1 className={style.titulo__favoritos}>Médicos Favoritos</h1>
        <img src={favoritos} alt="estrela do(s) medico(a) favorito(a)" />
      </div>
      <div className={style.lista__medicos}>
        {medicos.map((medico) => (
          <div className={style.card} key={medico.id}>
            <div className={style.info}>
              <h2 className={style.medico__nome}>{medico.nome}</h2>
              <p className={style.especialidade}>{medico.especialidade}</p>
            </div>
            <button className={style.botao} type="submit">
              Agendar Consulta
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
