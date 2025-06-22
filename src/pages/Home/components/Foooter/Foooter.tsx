import CallMed from '../../../../assets/Home/CallMed.png';

function Foooter() {

    return (
        <footer className="footer">
            <nav className="footer__nav">
                <img src={CallMed} />
                <a href="#home" className="footer__nav__Home">Home</a>
                <a href="#dashboard" className="footer__nav__Dashboard">Dashboard</a>
                <a href="#sobre" className="footer__nav__Sobre">Sobre</a>
                <a href="#contato" className="footer__nav__Contato">Contate-nos</a>
            </nav>
            <p className="footer__Direitos">© Copyright CallMed. All right reserved.</p>
        </footer>
    )


}

export default Foooter;