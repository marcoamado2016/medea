import React, { useState } from "react";
import ReactPlayer from "react-player";
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

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleFavorite = () => {
    alert("¡Agregado a favoritos!");
  };

  return (
    <section className={style.containerRadio}>
      <div className={style.Fm}>
        <img src={fm} alt="Logo FM" />
        <img src={onAir} alt="En vivo" />
      </div>
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
        />
        <img
          src={mute}
          alt="Silenciar"
          onClick={handleMute}
          className={`${style.button} ${isMuted ? style.active : ""}`}
        />
      </div>
      <ReactPlayer
        url="https://cdn.instream.audio/AudioPlayer/steven?mount=&" // Aquí va tu URL
        playing={isPlaying}
        muted={isMuted}
        controls={true} // Habilita controles de reproducción
        onError={(err) => console.error("Error al cargar la radio:", err)}
        config={{
          file: {
            forceAudio: true,
          },
        }}
      />
    </section>
  );
};



export default RadioPlayer;


// src="https://cdn.instream.audio/AudioPlayer/steven?mount=&"