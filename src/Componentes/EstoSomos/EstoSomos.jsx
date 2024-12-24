import style from './EstoSomos.module.css'
import { Link } from 'react-router-dom'



const EstoSomos =()=>{

    return (
        <div className={style.estoSomos}>
            <ul className={style.miLista}>
            
                <li>
                    <Link to="/ciem">Centro Integral Educativo</Link>
                </li>
                <li>
                <Link to="/atletico">
                    Atlético
                </Link>
                </li>
                <li>
                <Link to='/radio'>
                    Radio Libertad
                </Link>
                </li>
                <li>
                <Link to='/tv'>
                    Canal
                </Link>
                </li>
                <li>
                    <a>Cultos</a>
                </li>
               
            </ul>
      




        </div>
    )
}
export default EstoSomos