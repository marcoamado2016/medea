import React from "react";
import ReactPlayer from "react-player";

const Rd = () => {
  return (
    <div>
      <ReactPlayer
        url="https://streaming.tdiradio.com:8000/house.mp3" // Reemplaza con tu URL
        playing={true} // Autoplay
        controls={true} // Controles básicos
        volume={0.8} // Volumen inicial
        onError={() => console.error("Error al cargar la radio")}
        config={{
          file: {
            forceAudio: true,
          },
        }}
      />
    </div>
  );
};

export default Rd;