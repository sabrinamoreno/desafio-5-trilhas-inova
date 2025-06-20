import React from "react";
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>
          <strong>Entenda sobre a Telemedicina</strong>
        </h1>
        <p>
          Verifique através de uma Dashboard interativa dados reais sobre a
          Telemedicina no Brasil
        </p>
        <button href="#form" className="cta-button">
          Veja Agora!
        </button>
      </header>

      <section className="bodyTexto01">
        <h2>
          <strong>O que é Telemedicina?</strong>
        </h2>
        <br />
        <p>
          A telemedicina é a prática da medicina à distância, utilizando
          tecnologias da informação e comunicação para oferecer serviços de
          saúde, como consultas, diagnósticos, monitoramento e orientações
          médicas. Ela permite que profissionais da saúde atendam pacientes sem
          a necessidade de estarem no mesmo local, o que é especialmente útil em
          áreas remotas ou para pessoas com dificuldade de locomoção. Além de
          aumentar o acesso aos cuidados médicos, a telemedicina contribui para
          a agilidade no atendimento e otimização dos recursos de saúde.
        </p>
        <br />
        <h3>
          <strong>Como funciona?</strong>
        </h3>
        <br />
        <p>
          A telemedicina utiliza plataformas digitais seguras, como a CallMed,
          para conectar pacientes e médicos em tempo real. O atendimento ocorre
          via vídeo, áudio ou mensagens, após o agendamento online. Durante a
          consulta, o médico pode avaliar sintomas, solicitar exames, emitir
          receitas e encaminhar para atendimento presencial, se necessário. As
          informações são registradas em prontuários eletrônicos protegidos.
          Além das consultas, a telemedicina também permite monitoramento
          remoto, segunda opinião e apoio a regiões distantes, tornando o
          atendimento mais acessível e eficiente.
        </p>
        <br />
        <h4>
          <strong>Quais são os seus benefícios?</strong>
        </h4>
        <br />
        <p>
          A telemedicina oferece diversos benefícios tanto para pacientes quanto
          para profissionais de saúde. Ela amplia o acesso ao atendimento
          médico, especialmente para quem vive em áreas remotas ou tem
          dificuldade de locomoção, e agiliza o diagnóstico e o tratamento,
          eliminando a necessidade de deslocamentos. Além disso, permite
          economia de tempo e recursos, facilita o monitoramento contínuo de
          pacientes com doenças crônicas e contribui para a redução da
          sobrecarga em hospitais e clínicas. Outro ponto importante é a
          possibilidade de integração entre profissionais, permitindo troca de
          informações e segunda opinião médica de forma rápida e segura.
        </p>
        <br />
        <p>
          <strong>Prove seus conhecimentos em Telemedicina!</strong>
        </p>
        <br />

        <button href="#form" className="cta-button01" id="botao01">
          Responda um Quiz agora!
        </button>
        <br />
      </section>

      <section className="bodyTexto02">
        <h5>
          <strong>Conheça a CallMed com um clique</strong>
        </h5>
        <div>
          <p>
            Acesse médicos de diversas especialidades com rapidez, segurança e
            sem sair de casa. Cadastre-se e aproveite todos os benefícios da
            telemedicina com conforto e agilidade.
          </p>
          {/* ao lado coloca-se uma imagem */}
        </div>
        <br />
        <button type="submit" id="butao02">
          Cadastre-se!
        </button>
      </section>

      <footer className="footer">
        <nav className="nav">
          <a href="#callmed" className="logo">
            ; Callmed
          </a>
          <a href="#home" className="Home">
            ; Home
          </a>
          <a href="#dashboard" className="Dashboard">
            ; Dashboard
          </a>
          <a href="#sobre" className="Sobre">
            Sobre
          </a>
          <a href="#contato" className="Contato">
            Contate-nos
          </a>
        </nav>
        <br />
        <p>&copy; © Copyright CallMed. All right reserved.</p>
      </footer>
    </div>
  );
}

export default App;
