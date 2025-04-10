import "./Landing.css";
import EstoSomos from "../../Componentes/EstoSomos/EstoSomos";
import SerasBendecido from "../../Componentes/SerasBendecido/SerasBendecido";
import Concejeria from "../../Componentes/Concejeria/Concejeria";
import Parallax from "../../Componentes/Parallax/Parallax";
import Slider from "../../Componentes/Silder/Silder";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Parallax />
      <Slider />
      <Concejeria />
      <EstoSomos />
      <SerasBendecido />
    </div>
  );
};

export default Landing;
