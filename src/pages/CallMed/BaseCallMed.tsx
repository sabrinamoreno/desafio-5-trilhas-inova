import { Outlet } from "react-router-dom";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import style from "./BaseCallMed.module.scss";

function BaseCallMed() {

    return (
        <div className={style.base}>
            <MenuLateral />
            <Outlet />    
        </div>
    )
}

export default BaseCallMed;