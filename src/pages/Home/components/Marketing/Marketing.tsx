import Section from "../Section/Section";
import ConhecaCallMed from '../../../../assets/Home/conhecaCallMed.png';

function Marketing() {

    return (
        <section className="Marketing">
            <div className="Marketing__Container">
                <Section
                    titulo="Conheça a CallMed com um clique"
                    texto="Acesse médicos de diversas especialidades com rapidez, segurança e
            sem sair de casa. Cadastre-se e aproveite todos os benefícios da
            telemedicina com conforto e agilidade."
                />
                <a href="/login" className="Marketing__Container__Cta"> Cadastre-se! </a>
            </div>
            <img className="Marketing__Imagem" src={ConhecaCallMed} />
        </section >
    )

}

export default Marketing;