import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Favoritos.module.scss";
import ListaFavoritos from "./components/ListaFavoritos/ListaFavoritos";



export default function Favoritos() {
 

  return (
    <div className={style.favoritos}>
      <Cabecalho 
      titulo="Médicos Favoritos" />
      <div className={style.favoritos__corpo}>
      <ListaFavoritos />
      </div>
    </div>
  );
}
