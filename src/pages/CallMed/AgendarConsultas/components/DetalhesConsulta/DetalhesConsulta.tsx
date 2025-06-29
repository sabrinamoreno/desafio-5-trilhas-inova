import style from "./DetalhesConsulta.module.scss";

function DetalhesConsulta() {

    return (
        <>
            <div className={style.consulta}>
                <h1 className={style.consulta__titulo}>Detalhes da Consulta</h1>

                <label className={style.consulta__label}>Especialidade
                    <select className={style.consulta__select}>
                        <option >Selecione uma especialidade</option>
                    </select>
                </label>

                <label className={style.consulta__label}>Médico
                    <select className={style.consulta__select}>
                        <option>Selecione um médico</option>
                    </select>
                </label>

                <label className={style.consulta__label}>Horários
                    <select className={style.consulta__select}>
                        <option>Selecione um horário</option>
                    </select>
                </label>
            </div>

            <button className={style.consulta__botao}>Confirmar</button>
        </>
    )


}

export default DetalhesConsulta;