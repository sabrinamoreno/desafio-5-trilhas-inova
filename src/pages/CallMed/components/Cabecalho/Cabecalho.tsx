import FotoPerfil from "../../../../assets/CallMed/foto.png"; 
import style from "./Cabecalho.module.scss";

type Props = {
  titulo: string;
  subtitulo?: string;
};

function Cabecalho({ titulo, subtitulo }: Props) {
  return (
    <header>
      <div className={style.informacoes}>
        <h2 className={style.informacoes__titulo}>{titulo}</h2>
        {subtitulo && (
          <p className={style.informacoes__subtitulo}>{subtitulo}</p>
        )}
      </div>
      <img src={FotoPerfil} className={style.imagem} />
    </header>
  );
}

export default Cabecalho;
