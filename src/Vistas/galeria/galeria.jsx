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
                  <>
                    {noticia.noticia != "" && noticia.titulo != "" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "10px",
                          paddingLeft: "150px",
                          marginTop: "200px",
                          
                        }}
                      >
                        <div style={{ flex: 1, maxWidth: "800px" }}>
                          <h1
                            style={{
                              fontFamily: "'The Seasons', sans-serif",
                              fontWeight: 400,
                              fontSize: "32px",
                              lineHeight: "1.2",
                              textAlign: "left",
                              marginBottom: "50px",
                              color: "#0c0c0cff",
                            }}
                          >
                            {noticia?.titulo}
                          </h1>

                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: "16px",
                              color: "#020202",
                              columnGap: "30px",
                              columnCount: 2,
                              columnWidth: "240px",
                              lineHeight: "24px",
                              margin: 0,
                              fontFamily: "'Titillium Web', sans-serif",
                            }}
                          >
                            {noticia?.noticia}
                          </p>
                        </div>
                      </div>
                    )}
                    {noticia.imagenesRelacionadas?.length > 0 && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            marginTop:
                              noticia.noticia != "" && noticia.titulo != ""
                                ? "-310px"
                                : "150px",
                            marginRight: "400px",
                          }}
                        >
                          <button
                            onClick={() =>
                              albunFotos(noticia.imagenesRelacionadas)
                            }
                            style={{
                              marginBottom: "20px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              marginRight: "-200px"
                            }}
                          >
                            <img
                              src={galeria}
                              alt="ver más"
                              style={{
                                width: "80%",
                                height: "auto",
                                objectFit: "contain",
                              }}
                            />
                          </button>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "20px",
                              alignItems: "flex-end",
                              marginRight: "-319px",
                              border: "1px",
                              cursor: "default",
                              pointerEvents: "none",
                            }}
                          >
                            {noticia.imagenesRelacionadas[0] && (
                              <img
                                src={
                                  noticia.imagenesRelacionadas[0]?.url_imagen
                                }
                                alt="Imagen 1"
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  backgroundColor: "#000",
                                }}
                              />
                            )}
                            {noticia.imagenesRelacionadas[1] && (
                              <img
                                src={
                                  noticia.imagenesRelacionadas[1]?.url_imagen
                                }
                                alt="Imagen 2"
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  backgroundColor: "#000",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.controlsContainer}>
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
