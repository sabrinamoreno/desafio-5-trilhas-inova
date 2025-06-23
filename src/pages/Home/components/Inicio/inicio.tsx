import style from './Inicio.module.scss';


function Inicio() {

    return (
        <section className={style.Inicio}>
            <div className={style.InicioPrincipal}>
                <h1 className={style.Inicio__Principal__Titulo}>
                    Entenda sobre a
                </h1>
                <h1>
                    <strong className={style.Inicio__Principal__Destaque}> Telemedicina</strong>
                </h1>
                <p className={style.Inicio__Principal__texto}>
                    Verifique através de uma Dashboard interativa
                </p>
                <p className={style.Inicio__Principal__texto}>
                    dados reais sobre a Telemedicina no Brasil
                </p>
                <a  href="#" className={style.Inicio__Principal__cta}>
                    Veja Agora!
                </a>
            </div>
        </section>
    )

}

export default Inicio;