import React from 'react';
import Cabecalho from "../components/Cabecalho/Cabecalho";
import style from "./Perfil.module.scss";

function Perfil() {
    return (
        <> 
            <div className={style.perfil}>
            <Cabecalho
                titulo="Meu Perfil"
            />
        </div>

            <div className={style["perfil-container"]}> 

                <div className={style["perfil__header-content"]}>
                    <h2>Informações Pessoais</h2> 
                    <button className={style["perfil__save-button"]}>Salvar Informações</button>
                </div>
                
            
                <div className={style["form-grupo"]}>
                    <label htmlFor="nomeCompleto" className={style["form-label"]}>Nome Completo</label>
                    <input
                        type="text"
                        id="nomeCompleto"
                        className={style["form-input"]}
                        placeholder="Digite seu nome completo"
                    />
                </div>
                
                <div className={style["form-grupo"]}>
                    <label htmlFor="email" className={style["form-label"]}>E-mail</label>
                    <input
                        type="email"
                        id="email"
                        className={style["form-input"]}
                        placeholder="Digite seu email"
                    /> 
                </div>

                <div className={style["form-grupo"]}>
                    <label htmlFor="cpf" className={style["form-label"]}>CPF</label>
                    <input
                        type="number"
                        id="cpf"
                        className={style["form-input"]}
                        placeholder="Digite seu CPF"
                    />
                </div>
                
        
            </div>
        </>
    );
}

export default Perfil;