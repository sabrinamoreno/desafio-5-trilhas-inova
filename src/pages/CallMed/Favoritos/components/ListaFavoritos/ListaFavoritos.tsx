import { useEffect, useState } from "react";
import style from "./ListaFavoritos.module.scss";
import favoritos from "../../../../../assets/CallMed/star.png";
import Perfil from "../../../../../assets/CallMed/perfilFavoritos.png";
import Delete from "../../../../../assets/CallMed/delete.png";
import { useNavigate } from "react-router-dom";
import { MedicoFavorito } from "../../../../../types/medicoFavorito";
import { buscarFavoritos, desfavoritarMedico } from "../../../../../utils/favoritosServices";



function ListaFavoritos() {
  const [medicos, setMedicos] = useState<MedicoFavorito[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarFavoritos()
      .then((res) => setMedicos(res.data))
      .catch((err) => {
        console.error("Erro ao buscar dados do médico:", err);
        alert("Erro ao buscar dados do médico.");
      });
  }, []);

  const handleAgendarConsulta = (medico: MedicoFavorito) => {
    navigate("/callmed/agendarconsultas", {
      state: {
        medicoId: medico.id,
        nome: medico.nome,
        especialidade: medico.especialidade,
      },
    });
  };

  const handleDesfavoritar = (id: number) => {
    desfavoritarMedico(id)
      .then(() => {
        setMedicos((prev) => prev.filter((m) => m.id !== id));
      })
      .catch((err) => {
        console.error("Erro ao desfavoritar médico:", err);
        alert("Erro ao desfavoritar médico.");
      });
  };


  return (
    <div className={style.conteudo}>
      <div className={style.favoritos}>
        <h1 className={style.favoritos__titulo}>Médicos Favoritos</h1>
        <img src={favoritos} alt="estrela do(s) medico(a) favorito(a)" />
      </div>
      <div className={style.lista}>
        {medicos.map((medico) => (
          <div className={style.lista__medicos} key={medico.id}>
            <div className={style.lista__medicos__informacoes}>
              <img className={style.foto} src={Perfil} />
              <div className={style.informacoes}>
                <h2 className={style.informacoes__nome}>{medico.nome}</h2>
                <p className={style.informacoes__especialidade}>
                  {medico.especialidade}
                </p>
              </div>
              <img className={style.informacoes__delete} src={Delete} onClick={() => handleDesfavoritar(medico.id)} />
            </div>
            <button
              className={style.botao}
              type="button"
              onClick={() => handleAgendarConsulta(medico)}
            >
              Agendar Consulta
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaFavoritos;
