import { Link } from "react-router-dom";
import style from "./Tv.module.css";
import portada from "../../assets/portada.png";
import { useEffect } from "react";
const Tv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/Dios.pdf";
    link.download = "Dios.pdf";
    // document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
  };

  return (
    <div className={style.tvContainer}>
      <section className={style.firstSection}>
        <a
          href="https://www.youtube.com/@MEDEATVHD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portada} className={style.imgPortada} alt="Portada" />
        </a>
        <div className={style.Links}>
          <Link to="/mensaje">MENSAJE</Link>
          <a href="/eventos">EVENTO</a>
          <Link to="/articulo">ARTÍCULOS</Link>
        </div>
      </section>
      <section className={style.word}>
        <h1>El poder de la palabra</h1>
        <div className={style.words}>
          <h2>Raul Villareal</h2>
          <h2>24.11.2024</h2>
        </div>
      </section>
    </div>
  );
};

export default Tv;
