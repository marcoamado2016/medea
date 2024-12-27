import style from './Footer.module.css'
import {Link} from 'react-router-dom'
import facebook from '../../assets/facebook_icon-icons.com_53612.png'
import insta from '../../assets/instagram_logo_icon_229292.png'
import tiktok from '../../assets/tiktok_icon.png'
import whats from '../../assets/whatsapp_icon-icons.com_53606.png'
import gmail from '../../assets/google_plus_icon-icons.com_53608.png'
import you from '../../assets/youtube.png'
import medea from '../../assets/Medea.png'


const Footer =()=>{

    return(
    <div className={style.footer}>
        <div className={style.row}>
           <div className={style.titulos}> 
            <h4>AQUÍ ESTAMOS</h4>
            <Link>
                <p>Libertad en la red</p>
            </Link>
            <Link to="/mensaje">
                <p>Un mensaje al corazón</p>
            </Link>
            
                <p href="#slider">Noticias</p>
            

           </div>
           <div className={style.titulos}>
             <h4>SOMOS</h4>
             <Link to="/ibm">
                <p>Instituto Bíblico</p>
             </Link>
             <Link to="/ciem">
                <p>Centro Integral Educativo</p>
             </Link>
             <Link to="/atletico">

                <p>Atlético</p>
             </Link>
             <Link to="/cultos">

                <p>Cultos</p>
             </Link>
                <p>Ubicación</p>
            
            </div>
           <div className={style.titulos}> 
             <h4>COLABORAR</h4>
             <Link to="/colaborar">
                <p>Trasnsferencia bancaria</p>
             </Link>
                <p>Mercado pago</p>
           </div>
           <div className={style.titulos}> 
           <h4>AYUDA</h4>
         
               <p>Contacto</p>

           <h4>REDES SOCIALES</h4>
              <a href="https://www.facebook.com/medeatv/?locale=br_FR" target='_blank'> <img src={facebook}></img></a>
              <a href='https://www.instagram.com/medea_ok/' target='_blank'><img src={insta}></img></a>
              <a href='https://www.tiktok.com/@medeatvhd' target='_blank'><img src={tiktok}></img></a>
              <a href='https://wa.link/s6hyvz' target='_blank'> <img src={whats}></img></a>
              <a><img src={gmail}></img></a>
              <a href='https://www.youtube.com/@MEDEATVHD' target='_blank'><img src={you}></img></a>

            <p>Recibe contenido exclusivo</p>
        </div>
        <hr className={style.divider} />

           </div>
           <div className={style.longFooter} >
            <img src={medea}></img>
            <h2>Copyright©2024. Todos los derechos reservados</h2>
           </div>
        
    </div>
    )
}
export default Footer