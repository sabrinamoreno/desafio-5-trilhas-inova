import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Perfil.module.scss";
import Formulario from './components/Formulario/Formulario';

function Perfil() {
    return (
        
        <div className={style.perfil}>
            <Cabecalho
                titulo="Meu Perfil"
            />

            <div className={style.perfil__conteudo}>
            <Formulario />
            </div>
        </div>
    );
}

export default Perfil;