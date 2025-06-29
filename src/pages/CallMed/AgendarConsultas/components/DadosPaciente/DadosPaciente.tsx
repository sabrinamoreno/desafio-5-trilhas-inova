import style from "./DadosPaciente.module.scss";


function DadosPaciente() {

    return (
        <div className={style.paciente}>
            <h2 className={style.paciente__titulo}>Dados do Paciente</h2>
            <div className={style.paciente__campos}>
                <label className={style.paciente__campos__label}>Nome Completo
                    <input
                        className={style.paciente__campos__input}
                        type="text" />
                </label>

                <label className={style.paciente__campos__label}>CPF
                    <input
                        className={style.paciente__campos__input}
                        type="text" />
                </label>
            </div>
        </div>
    )

}

export default DadosPaciente;