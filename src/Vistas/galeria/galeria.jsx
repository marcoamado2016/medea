import style from "./Slider.module.css";
import { useRef, useState, useEffect } from "react";
import { data1 } from "../../data1";
import izqu from "../../assets/flechaiz_.png";
import derec from "../../assets/flechader.png";
import abajo from "../../assets/menos.png";
import galeria from "../../assets/galeria.png";
import fondo from "./fondo.png";
const Slider = ({ setOpen, noticia, open }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [album, setAlbum] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;

    if (listNode && !isFirstLoad) {
      const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  const handleAlbumNav = (dir, total) => {
    setAlbumIndex((curr) => {
      if (dir === "prev") {
        return curr === 0 ? total - 1 : curr - 1;
      } else {
        return curr === total - 1 ? 0 : curr + 1;
      }
    });
  };

  const scrollToImage = (direction) => {
    setCurrentIndex((curr) => {
      if (direction === "prev") {
        return curr === 0 ? data1.length - 1 : curr - 1;
      } else {
        return curr === data1.length - 1 ? 0 : curr + 1;
      }
    });
  };

  const albunFotos = (imagenesRelacionadas) => {
    console.log("imagenesRelacionadas ", imagenesRelacionadas);
    setAlbum(true);
  };

  const scrollDown = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={style.mainContainer}
        onMouseEnter={() => setIsFirstLoad(false)}
        id="slider"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "150vh",
          width: "100%",
          position: "relative",
          boxShadow: `
      inset 0 4px 6px rgba(255, 255, 255, 0.6),  
      inset 0 -4px 6px rgba(0, 0, 0, 0.4),       
      0 6px 10px rgba(0, 0, 0, 0.5)          
    `,
          borderRadius: "10px",
        }}
      >
        <div className={style.sliderConteiner}>
          <div className={style.conteinerImg}>
            <ul ref={listRef}>
              {data1.map((item, index) => (
                <li
                  key={item.id}
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: index === currentIndex ? "block" : "none", // mostramos solo la actual
                  }}
                >
                  {noticia && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20%",
                        left: "10%",
                        right: "10%",
                        color: "white",
                        padding: "20px",
                        borderRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "20%",
                          left: "10%",
                          color: "white",
                          padding: "20px",
                          borderRadius: "8px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start", // alinea todo a la izquierda
                        }}
                      >
                        <h1
                          style={{
                            fontFamily: "'The Seasons', sans-serif",
                            fontWeight: 400,
                            fontSize: "32px",
                            lineHeight: "1.2",
                            textAlign: "left", // ahora a la izquierda
                            marginBottom: "20px",
                            color: "#0c0c0cff",
                          }}
                        >
                          {noticia?.titulo}
                        </h1>

                        <div style={{ maxWidth: "500px" }}>
                          <p
                            style={{
                              fontFamily: "'Titillium Web', sans-serif",
                              fontWeight: 100,
                              fontSize: "16px",
                              lineHeight: "1.6",
                              color: "#020202ff",
                              columnGap: "40px",
                              columnCount: 2,
                              columnWidth: "465px", // ancho más razonable por columna
                              textAlign: "justify",
                              margin: 0,
                            }}
                          >
                            {noticia?.noticia}
                          </p>
                        </div>
                      </div>

                      <div
                        style={{
                          justifyContent: "flex-end",
                          display: "flex",
                        }}
                      >
                        <button
                          onClick={() =>
                            albunFotos(noticia.imagenesRelacionadas)
                          }
                        >
                          <img
                            src={galeria}
                            alt="ver más"
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "contain",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={style.leftArrow}
            onClick={() => scrollToImage("prev")}
          >
            <img src={izqu} alt="Prev" className={style.arrowImage} />
          </div>
          <div
            className={style.rightArrow}
            onClick={() => scrollToImage("next")}
          >
            <img src={derec} alt="Next" className={style.arrowImage} />
          </div>
          <div className={style.downButton} onClick={() => scrollDown()}>
            <img src={abajo} alt="Down" />
          </div>
        </div>
      </div>

      {album && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setAlbum(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "30px",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            x
          </button>

          {noticia?.imagenesRelacionadas?.length > 0 && (
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={noticia.imagenesRelacionadas[albumIndex].url_imagen}
                alt="album"
                style={{
                  maxHeight: "80vh",
                  maxWidth: "90vw",
                  borderRadius: "10px",
                }}
              />

              <button
                onClick={() =>
                  handleAlbumNav("prev", noticia.imagenesRelacionadas.length)
                }
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "20px",
                  fontSize: "30px",
                  color: "white",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={izqu} alt="Prev" className={style.arrowImage} />
              </button>
              <button
                onClick={() =>
                  handleAlbumNav("next", noticia.imagenesRelacionadas.length)
                }
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  fontSize: "30px",
                  color: "white",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={derec} alt="Next" className={style.arrowImage} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Slider;
