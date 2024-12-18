import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Parallax.module.css';
import nube from '../../assets/nube 03.png';
import radio from '../../assets/index_14.jpg';
import tv from '../../assets/index_16.jpg';

const Parallax = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const tituloElement = document.querySelector(`.${style.titulo}`);
            if (tituloElement) {
                tituloElement.style.transform = `translate(-50%, calc(-35% + ${scrollPosition * 0.85}px))`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={style.parallax}>
            <div className={style.outerParallax}>
                <div className={style.titulo}>
                    <h2>una institucion</h2>
                    <h1>con Vida</h1>
                </div>
            </div>
            <img src={nube} alt="Nube" className={style.nube} /> 

           
            <div className={style.aquiEstamos}>
                <div className={style.titulo2}>
                    <h1>AQUÍ ESTAMOS</h1>
                </div>

                <div className={style.medio}>
                    <Link to='/radio'>
                     <div className={style.card}>
                        <img src={radio} alt="Radio" />
                     </div>
                    </Link>

                    <Link to='/tv'> 
                     <div className={style.card}>
                        <img src={tv} alt="TV" />
                     </div>
                    </Link>
                </div>

                <div className={style.textoLanding}>
                    <p>
                        El Ministerio M.E.D.E.A., con 41 años de misión, difunde el evangelio globalmente mediante tecnología y medios, alcanzando a quienes no pueden asistir en persona. Brinda apoyo espiritual a personas privadas de libertad y mantiene una presencia continua a través de "Libertad en la red" y "Un Mensaje al Corazón". Su labor busca transformar vidas con el mensaje de esperanza y amor de Dios.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Parallax;



