import style from "./Slider.module.css";
import { useRef, useState, useEffect } from "react";
import { data1 } from "../../data1";
import izqu from "../../assets/galeriaDerecha.png";
import derec from "../../assets/galeriaIzquierda.png";
import abajo from "../../assets/subir.png";
const Slider = ({ setOpen, noticia, open }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
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

  const scrollToImage = (direction) => {
    setCurrentIndex((curr) => {
      if (direction === "prev") {
        return curr === 0 ? data1.length - 1 : curr - 1;
      } else {
        return curr === data1.length - 1 ? 0 : curr + 1;
      }
    });
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
      >
        <div className={style.sliderConteiner}>
          <div className={style.conteinerImg}>
            <ul ref={listRef}>
              {data1.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.imgUrl}
                    style={{ width: "1920px", height: "958px" }}
                    alt=""
                  />
                  {noticia && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20%",
                        left: "10%",
                        right: "10%",
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        padding: "20px",
                        borderRadius: "8px",
                      }}
                    >
                      <h1
                        style={{
                          textAlign: "center",
                          marginBottom: "20px",
                          color: "#000",
                        }}
                      >
                        {noticia?.titulo}
                      </h1>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "20px",
                          textAlign: "justify",
                        }}
                      >
                        <p>{noticia?.noticia}</p>
                        <button>Ver mas </button>
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
    </>
  );
};

export default Slider;
