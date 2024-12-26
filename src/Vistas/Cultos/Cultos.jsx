import React from 'react';
import style from './Cultos.module.css'

const Culto = () => {
    return (
    <div className={style.containerCultos}>
        <div className={style.cultosText}>
            <h1>Cultos</h1>
            <div className={style.cultos}>
            
            <p><b>LUNES:</b></p><a>REUNION MINISTRACIÓN JUVENIL(20:00 hs.)
                             Un espacio en donde los jóvenes de nuestro ministerio
                             comparten experiencias unicas en relacion con Dios</a>

            <p><b>MARTES:</b></p><a>REUNION PARA FAMILIA (20:00 hs.) 
                              La familia, el primer nucleo gestor de la iglesia,
                              en este espacio se brinda apoyo y contencion espiritual</a>
        <p><b>MIERCOLES:</b></p><a>REUNION DE FORTALEA(20:00 hs.)
                                No podemos esperar a que la semana termine,
                                y por ello nos volvemos a encontrar.</a>
            <p><b>SABADO:</b></p> <a>ENCUENTRO DE JÓVENES (20:00 hs.)
                              La edad no es condicionante para ser o no ser
                              parte, dejar un huella depende de tu actitud,
                              miles de jovenes te esperan.</a>     
            <p><b>DOMINGO:</b></p> <a>MENSAJE AL CORAZON(20:00 hs.)
                               Finalizamos la semana con la palabra de Dios que 
                                vá directo a tu corazon ¿Estas preparado?</a>
            </div>
         </div>
        </div>
    );
};

export default Culto;