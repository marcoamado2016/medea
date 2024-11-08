import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Medea.png";

const NavBar = () => {
    return (
        <div className={style.container}> 
            <div>
                <img src={Logo} className={style.logo} alt="Logo" />
            </div>
            <div>
                <ul className={style.menu}>
                    <li className={style.menuItem}>
                        <Link to="/" className={style.link}>
                            HOME
                        </Link>
                    </li>
                    <li className={style.menuItem}>
                        <Link to="/quienes" className={style.link}>
                            AQUI ESTAMOS
                        </Link>
                    </li>
                    <li className={style.menuItem}>
                        <Link to="/eventos" className={style.link}>
                            NOTICIAS
                        </Link>
                    </li>
                    <li className={style.menuItem}>
                        <Link to="/colaborar" className={style.link}>
                            ESTO SOMOS
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default NavBar;