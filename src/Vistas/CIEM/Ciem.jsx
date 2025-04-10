import style from "./ciem.module.css";
import texto from "../../assets/TEXTCiem.png";
import { useEffect } from "react";

const ciem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.containerCiem}>
      <div className={style.textCiem}>
        <h1>Preparando generaciones</h1>
        <img src={texto} className={style.text}></img>
      </div>
    </div>
  );
};

export default ciem;
