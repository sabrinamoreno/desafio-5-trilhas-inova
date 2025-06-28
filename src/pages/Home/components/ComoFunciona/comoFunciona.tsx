import Section from "../Section/Section";
import comoFuncionaImg from "../../../../assets/Home/comoFunciona.png";
import style from "./comoFunciona.module.scss"



function ComoFunciona() {

    return (
        <section className={style.ComoFunciona}>
            <Section
                titulo="Como funciona?"
                texto=" A telemedicina utiliza plataformas digitais seguras, como a CallMed,
                para conectar pacientes e médicos em tempo real. O atendimento ocorre
                via vídeo, áudio ou mensagens, após o agendamento online. Durante a
                consulta, o médico pode avaliar sintomas, solicitar exames, emitir
                receitas e encaminhar para atendimento presencial, se necessário. As
                informações são registradas em prontuários eletrônicos protegidos.
                Além das consultas, a telemedicina também permite monitoramento
                remoto, segunda opinião e apoio a regiões distantes, tornando o
                atendimento mais acessível e eficiente."
            />
            <img className={style.ComoFunciona__Imagem} src={comoFuncionaImg} />
        </section>
    )

}

export default ComoFunciona;