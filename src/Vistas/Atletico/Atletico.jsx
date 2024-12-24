import style from './Atletico.module.css'
import texto from '../../assets/textoAtletico.png'



const Atletico=()=>{
    return(
        <div className={style.atleticoContainer}>
        <div className={style.atleticoText}>
        <h1>Vamos M.E.D.E.A</h1>
        <img src={texto}></img>

        </div>
    


        </div>

    )
}

export default Atletico;