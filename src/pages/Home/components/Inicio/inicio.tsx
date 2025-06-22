import telemedicinaImg from '../../../../assets/Home/telemedicina.jpeg';


function Inicio() {

    return (
        <section className='Inicio'>
            <img src={telemedicinaImg} className='Inicio__imagem' alt="telemedicina" />
            <div className='Inicio__Principal'>
                <h1 className='Inicio__Principal__Titulo'>
                    Entenda sobre a <strong className='Inicio__Principal__Destaque'> Telemedicina</strong>
                </h1>
                <p className='Inicio__Principal__texto'>
                    Verifique através de uma Dashboard interativa dados reais sobre a
                    Telemedicina no Brasil
                </p>
                <a  href="#" className="Inicio__Principal__cta">
                    Veja Agora!
                </a>
            </div>
        </section>
    )

}

export default Inicio;