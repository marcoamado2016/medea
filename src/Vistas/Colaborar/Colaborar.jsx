import style from "./Colaborar.module.css";
import texto from "../../assets/TEXTOColaborar.png";
import { useEffect } from "react";

const Colaborar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.colaborar}>
      <div className={style.texto} onClick={upScroll}>
        <img
          src={texto}
          style={{ width: "400px", height: "450px", marginTop: "100px",marginLeft:"-400px" }}
        ></img>
      </div>
    </div>
  );
};
export default Colaborar;
