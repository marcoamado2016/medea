import style from './ciem.module.css'
import titulo from '../../assets/TITULO.png'
import texto from '../../assets/TEXTCiem.png'


const ciem =()=>{
    return(
        <div className={style.containerCiem}>
        <div className={style.textCiem}>
         <h1>Preparando generaciones</h1>
         <img src={texto} className={style.text}></img>
        </div>
        </div>
    )
}

export default ciem;