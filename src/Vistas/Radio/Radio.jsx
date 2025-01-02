import React, { useRef, useState } from "react";
import style from "./Radio.module.css";
import fm from "../../assets/logolibertad.png";
import favorito from "../../assets/FAVORITO.png";
import play from "../../assets/PLAY.png";
import pausa from "../../assets/PAUSA.png";
import onAir from "../../assets/ONAIR.png";
import stop from "../../assets/STOP_.png";
import mute from "../../assets/MUTE.png";

const RadioPlayer = () => {
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
        <img src={fm} alt="Logo FM" />
        <img src={onAir} alt="En vivo" />
      </div>

      {/* Controles de la radio */}
      <div className={style.radioFuncion}>
        <img
          src={favorito}
          alt="Favorito"
          onClick={handleFavorite}
          className={style.button}
        />
        <img
          src={isPlaying ? pausa : play}
          alt={isPlaying ? "Pausar" : "Reproducir"}
          onClick={togglePlay}
          className={style.button}
          target="_blank"
        />
        <img
          src={stop}
          alt="Detener"
          onClick={handleStop}
          className={style.button}
        />
        <img
          src={mute}
          alt="Silenciar"
          onClick={handleMute}
          className={`${style.button} ${isMuted ? style.active : ""}`}
        />
      </div>

      {/* Elemento de audio oculto */}
      <audio ref={audioRef} src="https://cdn.instream.audio/stream/steven" />
    </section>
  );
};






export default RadioPlayer;


// src="https://cdn.instream.audio/AudioPlayer/steven?mount=&"