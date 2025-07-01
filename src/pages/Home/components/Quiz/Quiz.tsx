import style from "./Quiz.module.scss"

function Quiz() {

    return (
        <section className={style.Quiz}>
            <h2 className={style.Quiz__subtitulo}>
                Prove seus conhecimentos em Telemedicina!
            </h2>
            <a href="#" className={style.Quiz__cta} id="botao__quiz">
                Responda um Quiz agora!
            </a>
        </section>
    )

}

export default Quiz;