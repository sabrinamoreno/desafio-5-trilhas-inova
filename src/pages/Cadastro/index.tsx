import Marca from '../../assets/Login/marca.png';
import FormularioCadastro from './components/Formulario/FormularioCadastro';

function Cadastro() {

    return (
        <div className='cadastro'>
            <div className='cadastro__cabecalho'>
                <img src={Marca} alt="Logo CallMed" />
                <h1 className="cadastro__cabecalho__titulo">CallMed Atendimentos</h1>
            </div>
            <FormularioCadastro />
        </div>
    )


}

export default Cadastro;