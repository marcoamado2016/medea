import './Contacto.css'
import insta from '../../assets/Insta.png'
import gmail from '../../assets/gmail.png'



const Contacto =()=>{
    return(
    <div className='Content'>
        <div className='Tittle-Contact'>
          <h1>Siguenos en nuestras redes</h1>

        </div>
        <div className='redes'>

         <div className='Imagen'>
            <img src={insta} ></img>
            <img src={face} ></img>
            <img src={you} ></img>
            <img src={gmail} ></img>
            <img src={whats} ></img>
         </div>
        </div>
        <div className='mobiles'>
          <div className='anuncio'>
          <a>
             Únase a nosotros
             Nos reunimos todos los domingos a las 9:30 a. m. y a las 11:45 a. m. para asistir a la iglesia. Hay un lugar para todos los domingos por la mañana. ¡Estamos ansiosos por verte!
          </a>
          <a className='Link' href=''>
            Mas informacion 
          </a>
           

          </div>
        </div>
        <div className='mujer'>
         <img src={tv}></img>
         <h1>Mira nuesta canal</h1>
          

        </div>
        <div className='radio'>
            <h1>Escucha nuestra radio</h1>
            <img src={radio}></img>
        </div>
        </div>

    )
}
export default Contacto