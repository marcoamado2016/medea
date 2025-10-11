import { useEffect } from "react";
import style from "./EstoSomos.module.css";
import { Link } from "react-router-dom";

const EstoSomos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.estoSomos} id="Estos">
      <h1 >ESTO SOMOS</h1>
      <ul className={style.miLista}>
        <li>
          <Link to="/ciem" onClick={Onclick} >
            Centro Integral Educativo
          </Link>
        </li>

        <li>
          <Link to="/ibm" onClick={Onclick}>
            Instituto Bíblico
          </Link>
        </li>
        <li>
          <Link to="/atletico" onClick={Onclick}>
            Atlético
          </Link>
        </li>
        <li>
          <Link to="/radio" onClick={Onclick}>
            Radio Libertad
          </Link>
        </li>
        <li>
          <Link to="/tv" onClick={Onclick}>
            Canal
          </Link>
        </li>

        <li>
          <Link to="/cultos" onClick={Onclick}>
            <a>Cultos</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default EstoSomos;
