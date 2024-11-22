import style from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Medea.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 412);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={style.container}>
            <div>
                <img src={Logo} className={style.logo} alt="Logo" />
            </div>

            <div
                className={style.menuIcon}
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`${style.menu} ${menuOpen ? style.open : ""}`}>
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
    );
};

export default NavBar;
