import CallMed from '../../../../assets/Home/CallMed.png';
import style from "./Footer.module.scss";

function Foooter() {

    return (
        <footer className={style.footer}>
            <nav className={style.footer__nav}>
                    <img src={CallMed} />
                    <div className={style.footer__nav__espacamento}>
                    <a href="#home" className="footer__nav__Home">Home</a>
                    <a href="#dashboard" className="footer__nav__Dashboard">Dashboard</a>
                    <a href="#sobre" className="footer__nav__Sobre">Sobre</a>
                </div>
                <a href="#contato" className="footer__nav__Contato">Contate-nos</a>
            </nav>
            <p className="footer__Direitos">
                © Copyright CallMed. All right reserved
            </p>
        </footer>
    )


}

export default Foooter;