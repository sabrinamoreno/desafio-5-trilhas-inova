import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Perfil.module.scss"

function Perfil (){

function Perfil() {
    return (

        <div className={style.perfil}>
            <Cabecalho
                titulo="Meu Perfil"
            />
            <h1>Perfil</h1>

            <h1 className="perfil-titulo">Perfil</h1>

           
            <p className="perfil-descricao">Informações Pessoais</p>

            <div className="form-grupo">
                <label className="form-label">Nome Completo</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder=""
                />
            </div>

            <label>CPF</label>
            <input type="number" placeholder="Digite seu CPF" />

        </div>
    );
}

export default Perfil;