import { useEffect } from "react";
import style from "./SerasBendecido.module.css";
import { useNavigate } from "react-router";

const SerasBendecido = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleNavigate = () => {
    navigate("/colaborar");
  };

  return (
    <div className={style.container} onClick={handleNavigate}>
      <h1 onClick={handleNavigate}>
        <span>Ser</span>
        <span>bendecido</span>
      </h1>
    </div>
  );
};

export default SerasBendecido;
