import style from './Consejeria.module.css'
import { useNavigate } from 'react-router'



const Concejeria=()=>{
    const navigate= useNavigate();

    const handleNavigate =()=>{
        navigate('/mensaje')
    }





    return(
        <div className={style.concejeria}>
            <div className={style.texto}>
                <h1>No estás solo</h1>
                <p>
                    Orar por los demas es un acto profundo de
                    amor por el prójimo, nos permite desconectarnos
                    de las distracciones diarias para pensar en el
                    bienestar de otros. No son solo palabras, se 
                    trata de desear lo mejor desde el corazon, for-
                    taleciendo asi los lazos humanos. Para muchos,
                    la oración es un recordatorio de que no estamos
                    solos y nos conecta Dios, con los demás y con
                    nosotros mismos. Es un gesto simple pero 
                    poderosoque transforma tanto a quienes oran 
                    como aquellos por quienes se ora
                </p>
               <button  className={style.boton}>LO NECESITO</button>
            </div>
          <button className={style.botonFlotante}
              onClick={handleNavigate}
              >oramos por vos!</button>
        </div>
    )

}

export default Concejeria