import './Contacto.css'
import insta from '../../assets/Insta.png'
import face from '../../assets/Face.png'
import you from '../../assets/you.png'
import gmail from '../../assets/gmail.png'
import whats from '../../assets/whats.png'
import radio from '../../assets/radio.png'
import tv from '../../assets/TV.png'

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