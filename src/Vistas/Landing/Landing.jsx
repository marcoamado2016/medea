import "./Landing.css";
import EstoSomos from "../../Componentes/EstoSomos/EstoSomos";
import SerasBendecido from "../../Componentes/SerasBendecido/SerasBendecido";
import Concejeria from "../../Componentes/Concejeria/Concejeria";
import Parallax from "../../Componentes/Parallax/Parallax";
import Slider from "../../Componentes/Silder/Silder";
import { useEffect, useState } from "react";
import Galeria from "../galeria/galeria";

const Landing = () => {
  const [open, setOpen] = useState(false);
  const [noticia, setNoticia] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Parallax />
      <Slider setOpen={setOpen} setNoticia={setNoticia} />
      {open && <Galeria setOpen={setOpen} noticia={noticia} />}
      <Concejeria />
      <EstoSomos />
      <SerasBendecido />
    </div>
  );
};

export default Landing;
