import style from './Tv.module.css'
import portada from '../../assets/portada.png'


const Tv =()=>{
    return(
        <div className={style.tvContainer}>
           <img src={portada} className={style.imgPortada}></img>
           <div className={style.Links}>
           <ul>
              <li>
                  <a>MENSAJE</a>
              </li>
              <li>
                  <a>EVENTO</a>
              </li>
              <li>
                  <a>ARTICULOS</a>
              </li>
           </ul>

           </div>

        </div>

    )
}
export default Tv