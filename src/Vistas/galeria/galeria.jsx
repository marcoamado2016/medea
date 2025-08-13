import style from "./Slider.module.css";
import { useRef, useState, useEffect } from "react";
import { data1 } from "../../data1";
import izqu from "../../assets/galeriaDerecha.png";
import derec from "../../assets/galeriaIzquierda.png";
import abajo from "../../assets/subir.png";
const Slider = ({ open, setOpen }) => {
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

  const goToslide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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
                </li>
              ))}
            </ul>
          </div>
          <div className={style.dotsContainer}>
            {data1.map((_, idx) => (
              <div
                key={idx}
                className={style.dotsContainerItem}
                onClick={() => goToslide(idx)}
              ></div>
            ))}
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
