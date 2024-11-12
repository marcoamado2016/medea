import style from './Footer.module.css'
import facebook from '../../assets/facebook_icon-icons.com_53612.png'
import insta from '../../assets/instagram_logo_icon_229292.png'
import twitter from '../../assets/twitter_x_new_logo_square_x_icon_256075.png'
import whats from '../../assets/whatsapp_icon-icons.com_53606.png'
import gmail from '../../assets/google_plus_icon-icons.com_53608.png'
import you from '../../assets/youtube.png'



const Footer =()=>{

    return(
    <div className={style.footer}>
        <div className={style.row}>
           <div className={style.titulos}> 
            <h4>AQUÍ ESTAMOS</h4>
                <p>Libertad en la red</p>
                <p>Un mensaje al corzaon</p>
                <p>Noticias</p>
           </div>
           <div className={style.titulos}>
             <h4>SOMOS</h4>
                <p>Instituto Bíblico</p>
                <p>Centro Integral Educativo</p>
                <p>Atletico</p>
                <p>Concejeria</p>
                <p>Cultos</p>
                <p>Ubicacion</p>
            
            </div>
           <div className={style.titulos}> 
             <h4>COLABORAR</h4>
                <p>Trasnsferencia bancaria</p>
                <p>Mercado pago</p>
           </div>
           <div className={style.titulos}> 
           <h4>AYUDA</h4>
               <p>Preguntas Frecuentes</p>
               <p>Contacto</p>

           <h4>REDES SOCIALES</h4>
              <img src={facebook}></img>
              <img src={insta}></img>
              <img src={twitter}></img>
              <img src={whats}></img>
              <img src={gmail}></img>
              <img src={you}></img>

            <p>Recibe contenido exclusivo</p>
           
           </div>
        </div>
        
    </div>
    )
}
export default Footer