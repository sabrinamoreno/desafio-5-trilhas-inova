import ComoFunciona from "./components/ComoFunciona/comoFunciona";
import Foooter from "./components/Footer/Footer";
import Inicio from "./components/Inicio/inicio";
import Marketing from "./components/Marketing/Marketing";
import Quiz from "./components/Quiz/Quiz";
import Section from "./components/Section/Section";
import style from "./Home.module.scss"


function App() {

    return (
        <div className={style.conteudo}>
            <Inicio />
            <Section
                titulo="O que é Telemedicina?"
                texto="A telemedicina é a prática médica realizada à distância por meio de tecnologias, 
                permitindo consultas, diagnósticos e orientações sem que o paciente e o profissional estejam no mesmo lugar. 
                Ela facilita o acesso à saúde, especialmente em áreas remotas, e torna o atendimento mais rápido e eficiente."
            />
            <ComoFunciona />
            <Section
                titulo="Quais são os seus benefícios?"
                texto="A telemedicina traz benefícios como maior acesso à saúde, especialmente para pessoas em locais remotos 
                ou com dificuldade de locomoção. Ela agiliza diagnósticos e tratamentos, reduz deslocamentos, economiza tempo 
                e recursos, e facilita o acompanhamento de pacientes com doenças crônicas. Também ajuda a diminuir a sobrecarga 
                em hospitais e permite a integração entre profissionais para troca de informações e segunda opinião médica de 
                forma rápida e segura."
            />
            <Quiz />
            <Marketing />
            <Foooter />
        </div>
    )

}

export default App;