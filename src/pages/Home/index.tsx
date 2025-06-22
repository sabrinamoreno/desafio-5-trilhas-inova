import ComoFunciona from "./components/ComoFunciona/comoFunciona";
import Foooter from "./components/Foooter/Foooter";
import Inicio from "./components/Inicio/inicio";
import Marketing from "./components/Marketing/Marketing";
import Quiz from "./components/Quiz/Quiz";
import Section from "./components/Section/Section";


function App() {

    return (
        <>
            <Inicio />
            <Section
                titulo="O que é Telemedicina?"
                texto="A telemedicina é a prática da medicina à distância, utilizando
          tecnologias da informação e comunicação para oferecer serviços de
          saúde, como consultas, diagnósticos, monitoramento e orientações
          médicas. Ela permite que profissionais da saúde atendam pacientes sem
          a necessidade de estarem no mesmo local, o que é especialmente útil em
          áreas remotas ou para pessoas com dificuldade de locomoção. Além de
          aumentar o acesso aos cuidados médicos, a telemedicina contribui para
          a agilidade no atendimento e otimização dos recursos de saúde."
            />
            <ComoFunciona />
            <Section
                titulo="Quais são os seus benefícios?"
                texto="A telemedicina oferece diversos benefícios tanto para pacientes quanto
          para profissionais de saúde. Ela amplia o acesso ao atendimento
          médico, especialmente para quem vive em áreas remotas ou tem
          dificuldade de locomoção, e agiliza o diagnóstico e o tratamento,
          eliminando a necessidade de deslocamentos. Além disso, permite
          economia de tempo e recursos, facilita o monitoramento contínuo de
          pacientes com doenças crônicas e contribui para a redução da
          sobrecarga em hospitais e clínicas. Outro ponto importante é a
          possibilidade de integração entre profissionais, permitindo troca de
          informações e segunda opinião médica de forma rápida e segura."
            />
            <Quiz />
            <Marketing />
            <Foooter/>
        </>
    )

}

export default App;