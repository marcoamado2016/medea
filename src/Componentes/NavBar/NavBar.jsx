import "./NavBar.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/Medea.png"



const NavBar=()=>{

 

    return(
        <div className="Container"> 
          <div>
            <img src={Logo}></img>
          </div>
          
         <div>
          <ul>
            <li>
              <Link to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/quienes">
                Quienes Somos
              </Link>
            </li>
            <li>
            <Link>
                Eventos
            </Link>
            </li>
            <li>
            <Link>
                Colaborar
            </Link>
            </li>
            <li>
            <Link to="/Contact">
                Contacto
            </Link>
            </li>
            <li>
            <Link>
                Calendario
            </Link>
            </li>
             
           </ul>
         </div>
          
  
        </div>
    )
}
export default  NavBar