
import React from 'react';
import style from "./Perfil.module.scss"

function Perfil() {
    return (
        
        <div className="perfil-container">

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

            <div className="form-grupo">
                <label className="form-label">E-mail</label>
                <input
                    type="email"
                    className="form-input"
                    placeholder=""
                />
            </div>

            <div className="form-grupo">
                <label className="form-label">CPF</label>
                <input
                    type="number"
                    className="form-input"
                    placeholder=""
                />
            </div>
        </div>
    );
}

export default Perfil;