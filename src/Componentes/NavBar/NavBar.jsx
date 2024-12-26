import style from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logocupula.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 412);

    const location = useLocation(); // Para obtener la ruta actual

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 412);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Determina si la ruta actual requiere letras negras
    const isBlackTextRoute = ["/ciem", "/atletico","/radio","/ser","/ibm","/cultos"].includes(location.pathname);

    console.log("Ruta actual:", location.pathname); // Depuración

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
                    <Link
                    to="/" 
                        className={`${style.link} ${isBlackTextRoute ? style.linkBlack : style.linkWhite}`}
                    >
                        HOME
                    </Link>
                </li>
                <li className={style.menuItem}>
                    <a

                         href="#aquiEstamos"
                        className={`${style.link} ${isBlackTextRoute ? style.linkBlack : style.linkWhite}`}
                    >
                        AQUÍ ESTAMOS
                    
                    </a>
                </li>
                <li className={style.menuItem}>
                    <a 
                        href="#slider" 
                        className={`${style.link} ${isBlackTextRoute ? style.linkBlack : style.linkWhite}`}
                    >
                        NOTICIAS
                    </a>
                </li>
                <li className={style.menuItem}>
                    <Link
                        to="/quienes"
                        className={`${style.link} ${isBlackTextRoute ? style.linkBlack : style.linkWhite}`}
                    >
                        ESTO SOMOS
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;


