import Marca from '../../assets/Login/marca.png';
import FormularioCadastro from './components/Formulario/FormularioCadastro';
import style from './Cadastro.module.scss';

function Cadastro() {

    return (
        <body className={style.cadastro__body}>
            <div className={style.cadastro}>
                <div className={style.cadastro__cabecalho}>
                    <img src={Marca} alt="Logo CallMed" />
                    <h1 className={style.cadastro__cabecalho__titulo}>
                        CallMed Atendimentos
                    </h1>
                </div>
                <FormularioCadastro />
            </div>
        </body>
    )


}

export default Cadastro;