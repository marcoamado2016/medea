import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook_icon-icons.com_53612.png";
import insta from "../../assets/instagram_logo_icon_229292.png";
import tiktok from "../../assets/tiktok_icon.png";
import whats from "../../assets/whatsapp_icon-icons.com_53606.png";
import gmail from "../../assets/google_plus_icon-icons.com_53608.png";
import you from "../../assets/youtube.png";
import medea from "../../assets/logocupula.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.row}>
        <div className={style.titulos}>
          <h4>AQUÍ ESTAMOS</h4>
          <Link to="/">Libertad en la red</Link>
          <Link to="/mensaje">Un mensaje al corazón</Link>
          <a href="#slider">Noticias</a>
        </div>
        <div className={style.titulos}>
          <h4>SOMOS</h4>
          <Link to="/ibm">Instituto Bíblico</Link>
          <Link to="/ciem">Centro Integral Educativo</Link>
          <Link to="/atletico">Atlético</Link>
          <Link to="/cultos">Cultos</Link>
          <p>Ubicación</p>
        </div>
        <div className={style.titulos}>
          <h4>COLABORAR</h4>
          <Link to="/colaborar">Transferencia bancaria</Link>
          <p>Mercado pago</p>
          <Link to="/loguin">Loguin</Link>
        </div>
        <div className={style.titulos}>
          <h4>AYUDA</h4>
          <p>Contacto</p>
          <h4 className={style.redesTitle}>REDES SOCIALES</h4>
          <div className={style.redes}>
            <a
              href="https://www.facebook.com/medeatv/?locale=br_FR"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/medea_ok/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@medeatvhd"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tiktok} alt="TikTok" />
            </a>
            <a href="https://wa.link/s6hyvz" target="_blank" rel="noreferrer">
              <img src={whats} alt="WhatsApp" />
            </a>
            <a>
              <img src={gmail} alt="Gmail" />
            </a>
            <a
              href="https://www.youtube.com/@MEDEATVHD"
              target="_blank"
              rel="noreferrer"
            >
              <img src={you} alt="YouTube" />
            </a>
          </div>
          <p>Recibe contenido exclusivo</p>
        </div>
      </div>
      <hr className={style.divider} />
      <div className={style.longFooter}>
        <img src={medea} alt="Medea logo" />
        <h2>Copyright©2024. Todos los derechos reservados</h2>
      </div>
    </div>
  );
};
export default Footer;
