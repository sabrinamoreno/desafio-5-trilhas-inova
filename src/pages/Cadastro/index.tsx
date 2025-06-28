import Marca from '../../assets/Login/marca.png';
import FormularioCadastro from './components/Formulario/FormularioCadastro';
import style from './Cadastro.module.scss';
import { useEffect } from 'react';

function Cadastro() {

    useEffect(() => {
        document.body.classList.add(style.cadastro__body);
        return () => document.body.classList.remove(style.cadastro__body);
    }, []);

    return (
        <section className={style.cadastro}>
            <div className={style.cadastro__cabecalho}>
                <img src={Marca} alt="Logo CallMed" />
                <h1 className={style.cadastro__cabecalho__titulo}>
                    CallMed Atendimentos
                </h1>
            </div>
            <FormularioCadastro />
        </section>
    )


}

export default Cadastro;