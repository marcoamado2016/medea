
import style from './Cultos.module.css';

const Culto = () => {
    

    return (
        <div className={style.containerCultos}>
            <div className={style.cultosText}>
                <h1>Cultos</h1>
                <div className={style.cultos}>
                    <div className={style.actividad}>
                        <p><b>LUNES:</b></p>
                        <span>REUNIÓN DE MINISTRACIÓN JUVENIL (20:00 hs.)<br />
                            Un espacio en donde los jóvenes de nuestro ministerio comparten experiencias únicas en relación con Dios.</span>
                    </div>
                    <div className={style.actividad}>
                        <p><b>MARTES:</b></p>
                        <span>REUNIÓN PARA LA FAMILIA (20:00 hs.)<br />
                            La familia, el primer núcleo gestor de la iglesia, en este espacio se brinda apoyo y contención espiritual.</span>
                    </div>
                    <div className={style.actividad}>
                        <p><b>MIÉRCOLES:</b></p>
                        <span>REUNIÓN DE FORTALEZA (20:00 hs.)<br />
                            No podemos esperar a que la semana termine, y por ello nos volvemos a encontrar.</span>
                    </div>
                    <div className={style.actividad}>
                        <p><b>VIERNES:</b></p>
                        <span>REUNIÓN DE ORACIÓN (20:00 hs.)<br />
                            Te invitamos a buscar juntos la presencia de Dios por medio de la oración, unánimes y con un corazón sincero.</span>
                    </div>
                    <div className={style.actividad}>
                        <p><b>SÁBADO:</b></p>
                        <span>ENCUENTRO DE JÓVENES (20:00 hs.)<br />
                            La edad no es condicionante para ser parte. Dejar una huella depende de tu actitud; miles de jóvenes te esperan.</span>
                    </div>
                    <div className={style.actividad}>
                        <p><b>DOMINGO:</b></p>
                        <span>MENSAJE AL CORAZÓN (20:00 hs.)<br />
                            Finalizamos la semana con la Palabra de Dios que va directo a tu corazón. ¿Estás preparado?</span>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Culto;
