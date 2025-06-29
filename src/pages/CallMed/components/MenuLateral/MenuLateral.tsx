import { useLocation } from 'react-router-dom';
import Marca from '../../../../assets/CallMed/logo.png';
import Dashboard from '../../../../assets/CallMed/dashboard.png';
import Consultas from '../../../../assets/CallMed/consultas.png';
import Agendar from '../../../../assets/CallMed/agendar.png';
import Perfil from '../../../../assets/CallMed/perfil.png';
import Favoritos from '../../../../assets/CallMed/favoritos.png';
import style from './MenuLateral.module.scss';

function MenuLateral() {
   const location = useLocation();

   const menuItems = [
      { href: '/callmed/dashboard', label: 'Dashboard', icon: Dashboard },
      { href: '/callmed/perfil', label: 'Perfil', icon: Perfil },
      { href: '/callmed/consultas', label: 'Consultas', icon: Consultas },
      { href: '/callmed/agendarconsultas', label: 'Agendar Consulta', icon: Agendar,},
      { href: '/callmed/favoritos', label: 'Favoritos', icon: Favoritos },
   ];

   return (
      <div className={style.menu}>
         <div className={style.menu__cabecalho}>
            <img src={Marca} alt="Logo CallMed" />
            <h1 className={style.menu__cabecalho__titulo}>CallMed Atendimentos</h1>
         </div>

         <nav className={style.nav}>
            {menuItems.map((item) => {
               const isActive = location.pathname === item.href;
               return (
                  <a
                     key={item.href}
                     href={item.href}
                     className={`${style.menu__opcoes} ${isActive ? style.menu__opcoes__active : ''}`}
                  >
                     <img src={item.icon} className={style.imagem} />
                     <h4 className={`${style.menu__opcoes__link} ${isActive ? style.menu__opcoes__active : ''}`}>
                        {item.label}
                     </h4>
                  </a>
               );
            })}
         </nav>
      </div>
   );
}

export default MenuLateral;
