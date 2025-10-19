import React, { useEffect, useRef, useState } from "react";
import style from "./Radio.module.css";
import fm from "../../assets/logolibertad.png";
import favorito from "../../assets/FAVORITO.png";
import play from "../../assets/PLAY.png";
import pausa from "../../assets/PAUSA.png";
import onAir from "../../assets/ONAIR.png";
import stop from "../../assets/STOP_.png";
import mute from "../../assets/MUTE.png";

const RadioPlayer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reinicia el audio al principio
    }
    setIsPlaying(false);
  };

  const handleFavorite = () => {
    alert("¡Agregado a favoritos!");
  };

  return (
    <section className={style.containerRadio}>
      {/* Información de la radio */}
      <div className={style.Fm}>
        <img
          src={fm}
          alt="Logo FM"
          style={{ width: "170px", height: "150px", marginTop: "250px" }}
        />
        <img
          src={onAir}
          alt="En vivo"
          style={{ width: "50px", height: "50px", marginTop: "30px" }}
        />
      </div>

      {/* Controles de la radio */}
      <div className={style.radioFuncion}>
        <img
          src={favorito}
          alt="Favorito"
          onClick={handleFavorite}
          className={style.buttonFav}
        />
        <div >
          <img
            src={isPlaying ? pausa : play}
            alt={isPlaying ? "Pausar" : "Reproducir"}
            onClick={togglePlay}
            className={style.buttonPlay}
            target="_blank"
            style={{ width: "80px", height: "80px" }}
          />

        </div>

        <img
          src={mute}
          alt="Silenciar"
          onClick={handleMute}
          className={`${style.buttonMute} ${isMuted ? style.active : ""}`}
        />
      </div>

      {/* Elemento de audio oculto */}
      <audio ref={audioRef} src="https://cdn.instream.audio/stream/steven" />
    </section>
  );
};

export default RadioPlayer;

// src="https://cdn.instream.audio/AudioPlayer/steven?mount=&"
