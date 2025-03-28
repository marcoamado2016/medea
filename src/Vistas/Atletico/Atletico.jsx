import style from './Atletico.module.css'
import texto from '../../assets/textoAtletico.png'



const Atletico=()=>{
    return(
        <div className={style.atleticoContainer}>
        <div className={style.atleticoText}>
        <h1>Vamos M.E.D.E.A</h1>
        <div className={style.textoAtletico}>
        <p>
        El Ministerio presenta su "Atlético", un club de futbol que forma
        parte de la liga amateur cordobesa. Más que un equipo deportivo,utiliza 
        el futbol como herramienta para desarrollo integral de niños, jovenes y adultos.
        </p>
        <p>
        El club fomenta una vida activa y saludable, promoviendo habili-
        dades físicas y valores cristianos como la disiplina, el respeto y
        la solaridad. A través del deporte, sus miembros desarrollan carácter,
        perseverancia y confianza, reflejando principios cristianos dentro y fuera
        del campo
        </p>
        
        <p>
        La vision de "Atlético M.E.D.E.A" trasciende los resultados deportivos:
        busca compartir evangelio de Cristo y llevar esperanza a la comunidad.Cada 
        partido y charla son oportunidades para difundir amor y fé.
        </p>
        <p>
        Invitan a ser parte de esta familia deportiva, donde el futbol se 
        convierte en una plataforma para el crecimiento personal y espiritual.
        Unidos por la fé, el equipo busca glorificar a Cristo en cada juego y en 
        sus corazones. ¡Vamos, Atlético M.E.D.E.A!
        </p>
        </div>
        </div>
    


        </div>

    )
}

export default Atletico;