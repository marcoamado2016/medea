import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Parallax.module.css";
import nube from "../../assets/nube 03.png";
import radio from "../../assets/index_14.jpg";
import tv from "../../assets/index_16.jpg";
import { useDispatch } from "react-redux";
import { ventana } from "../../slice/ventanaSlice";
const Parallax = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (+scrollPosition >= 600) {
        console.log("eee", scrollPosition);
        dispatch(ventana({ estado: true }));
      } else {
        dispatch(ventana({ estado: false }));
      }
      // Mover el título hacia abajo
      const tituloElement = document.querySelector(`.${style.titulo}`);
      if (tituloElement) {
        tituloElement.style.transform = `translate(-50%, calc(-50% + ${
          scrollPosition * 0.85
        }px))`;
      }

      // Mover las nubes hacia arriba
      const nubeElement = document.querySelector(`.${style.nube}`);
      if (nubeElement) {
        nubeElement.style.transform = `translate(-50%, calc(60% - ${
          scrollPosition * 0.85
        }px))`; // Ajusta la velocidad cambiando el multiplicador
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const Onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.parallax}>
      <div className={style.outerParallax}>
        <div className={style.titulo}>
          <h2>una institución</h2>
          <h1>con Vida</h1>
        </div>
      </div>
      <img src={nube} alt="Nube" className={style.nube} />
      <div className={style.aquiEstamos}>
        <div className={style.titulo2} id="aquiEstamos">
          <h1>AQUÍ ESTAMOS</h1>
        </div>

        <div className={style.medio}>
          <Link to="/radio" onClick={Onclick}>
            <div className={style.card}>
              <img src={radio} alt="Radio" />
            </div>
          </Link>

          <Link to="/tv" onClick={Onclick}>
            <div className={style.card}>
              <img src={tv} alt="TV" />
            </div>
          </Link>
        </div>

        <div className={style.textoLanding}>
          <p>
            El Ministerio M.E.D.E.A., con 41 años de misión, difunde el
            evangelio globalmente mediante tecnología y medios, alcanzando a
            quienes no pueden asistir en persona. Brinda apoyo espiritual a
            personas privadas de libertad y mantiene una presencia continua a
            través de "Libertad en la red" y "Un Mensaje al Corazón". Su labor
            busca transformar vidas con el mensaje de esperanza y amor de Dios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
