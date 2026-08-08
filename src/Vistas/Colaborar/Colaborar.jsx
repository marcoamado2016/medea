import style from "./Colaborar.module.css";
import texto from "../../assets/TEXTOColaborar.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Colaborar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.colaborar}>
      <button type="button" className={style.backButton} onClick={goBack}>
        ← Volver
      </button>
      <div className={style.texto} onClick={upScroll}>
        <img src={texto} alt="Colaborar" className={style.imgColaborar} />
      </div>
    </div>
  );
};
export default Colaborar;

