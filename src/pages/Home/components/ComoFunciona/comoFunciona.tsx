import Section from "../Section/Section";
import comoFuncionaImg from "../../../../assets/Home/comoFunciona.png";
import style from "./comoFunciona.module.scss"

function ComoFunciona() {

    return (
        <section className={style.ComoFunciona}>
            <Section
                titulo="Como funciona?"
                texto=" A telemedicina usa plataformas seguras, como a CallMed, 
                para conectar médicos e pacientes em tempo real por vídeo, áudio 
                ou mensagens. Após o agendamento online, o médico pode avaliar sintomas, 
                prescrever exames e medicamentos, ou encaminhar para atendimento presencial. 
                Os dados ficam registrados em prontuários eletrônicos protegidos. 
                Também permite monitoramento remoto, segunda opinião e apoio a áreas distantes,
                 tornando o atendimento mais acessível e eficiente."
            />
            <img className={style.ComoFunciona__Imagem} src={comoFuncionaImg} />
        </section>
    )

}

export default ComoFunciona;