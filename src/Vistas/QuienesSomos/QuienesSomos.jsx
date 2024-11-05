import './QuienesSomos.css'
import { Link } from 'react-router-dom'

import medea from "../../assets/Medea.png"









const QuienesSomos=()=>{


    return(
    <div className='todo'>
      <div className='parallax'> 
        <div className='Icon-container'>
            <img src={insta}></img>
            <img src={facebook}></img>
            <img src={youTube}></img>
            <img src={mail}></img>
        </div>
        <div className='titulo'>
            <h1>El mundo necesita mas<br/> gente que ama<br/>lo que hace!</h1>
        </div>
          <div className='parallax-img'>
            <img src={medea}></img>
          </div>
    
        </div>
        


     <div className='container'>
        <div className='tittle'>
            <h1>Quienes somos</h1>
        </div>
        <div className='text'>
            <p>
            El Ministerio M.E.D.E.A. (Ministerio Evangelístico Dios es Amor) fue fundado en la zona sur de la ciudad de Córdoba en el año 1984 por un grupo de personas con un profundo sentido de vocación de servicio. Motivados por el amor y el llamado de Dios, decidieron estructurar una organización destinada a atender las necesidades de la comunidad. En sus inicios, su principal objetivo era adorar a Dios, alabarlo y presentar sus cargas y dolencias. En una pequeña casa familiar, liderados por Raúl Alberto Villarreal, se dieron los primeros pasos, sin darse cuenta de que su labor se expandiría cada vez más, atrayendo a numerosas personas que compartían su profundo sentir.
            En pocos meses, M.E.D.E.A. tuvo que encontrar un lugar propio donde no solo se expresara el amor en palabras, sino también en obras. Comenzaron a asistir a personas necesitadas, proporcionándoles alimentos, ropa y calzado, y ofrecieron apoyo educativo a adultos y niños, dando así los primeros pasos en la formación académica.
            Cuenta con una cúpula catedral que puede congregar a miles de personas que se reúnen para alabar a Dios. En sus dos predios dispone de un estadio propio donde niños y jóvenes practican fútbol amateur y participan en la liga cordobesa, fomentando el deporte, la vida sana y buenos comportamientos, alejándolos de problemáticas sociales actuales. Espacios verdes, recreativos y un bautisterio propio donde cientos de personas son bautizadas cada año según el bautismo de Jesús con inmersión en aguas.
            En el ámbito educativo, el C.I.E.M. (Centro Integral Educativo M.E.D.E.A.) ofrece niveles inicial, primario y secundario, brindando educación a niños y adolescentes con principios cristianos y buenos valores, formándolos como personas de fe y amor al prójimo.
            M.E.D.E.A. lleva el evangelio de Jesucristo a toda persona a través de seminarios y cultos de adoración y alabanza a Dios todos los días, utilizando diversos medios de transmisión y comunicación. Además, profundiza en la Palabra de Dios a través del I.B.M. (Instituto Bíblico M.E.D.E.A.), que cuenta con más de mil alumnos cada año.
            </p>
        </div>
        <div className='radio'>
        <Link to='/radio'>

        <img src={radio}></img>
        </Link>
        <img src={tv}></img>

        </div>
    </div>
    </div>
     
         
        
    )
}

export default QuienesSomos