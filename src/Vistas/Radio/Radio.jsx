import React, { useState } from 'react';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Cambiar estado de reproducción
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={togglePlay} style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        {isPlaying ? 'Detener Radio' : 'Escuchar Radio'}
      </button>

      {isPlaying && (
        <iframe
          src="https://cdn.instream.audio/AudioPlayer/steven?mount=&"
          style={{ width: '0', height: '0', border: 0 }}
          allow="autoplay"
          title="Radio Player"
        ></iframe>
      )}
    </div>
  );
};

export default RadioPlayer;