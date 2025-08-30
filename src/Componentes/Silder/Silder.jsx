import style from "./Slider.module.css";
import { useRef, useState, useEffect } from "react";
import izqu from "../../assets/flechaiz_.png";
import derec from "../../assets/flechader.png";
import abajo from "../../assets/botonAbajo.png";
import editar from "../../assets/editar.png";
import { Snackbar, Alert } from "@mui/material";
import { useSelector } from "react-redux";
const Slider = ({ setOpen, setNoticia }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [imagenBase, setImagen] = useState([]);
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const status = useSelector((state) => state.auth.estado);
  useEffect(() => {
    cargarImage();
  }, []);
  useEffect(() => {
    cargarImage();
  }, [refresh]);
  useEffect(() => {
    const listNode = listRef.current;

    if (listNode && !isFirstLoad) {
      const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [currentIndex, isFirstLoad]);
  const cargarImage = () => {
    fetch("https://medea.com.ar/obtenerImagenes.php")
      .then((res) => {
        setRefresh(false);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          const imgs = data?.data?.map((item) => ({
            id: item.id,
            imgUrl: item.url_imagen,
            titulo: item.titulo,
            noticia: item.noticia,
            imagenesRelacionadas: item.imagenesRelacionadas,
          }));
          setImagen(imgs);
        }
      })
      .catch((error) => {
        console.error("Error fetching images: ", error);
      });
  };
  const scrollToImage = (direction) => {
    if (!imagenBase || imagenBase.length === 0) return;

    setCurrentIndex((curr) => {
      if (direction === "prev") {
        return curr === 0 ? imagenBase.length - 1 : curr - 1;
      } else {
        return curr === imagenBase.length - 1 ? 0 : curr + 1;
      }
    });
  };

  const goToslide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const scrollDown = () => {
    const noticiaSeleccionada = imagenBase[currentIndex];
    if (
      noticiaSeleccionada.noticia !== "" &&
      noticiaSeleccionada.titulo !== ""
    ) {
      setOpen(true);
    }
    setNoticia(noticiaSeleccionada);
  };
  const scrollDelete = () => {
    const noticiaSeleccionada = imagenBase[currentIndex];
    const data = new FormData();
    data.append("id", noticiaSeleccionada?.id);
    try {
      fetch("https://medea.com.ar/deleteFile.php", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.success === true) {
            setRefresh(true);
            setModal(true);
          }
        });
    } catch (error) {
      console.log("ERROR DELETE ", error);
    }
  };
  return (
    <>
      <Snackbar
        open={modal}
        autoHideDuration={3000}
        onClose={() => setModal(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setError(false)}
          severity={"success"}
          sx={{ width: "100%" }}
        >
          {"Imagen borrada"}
        </Alert>
      </Snackbar>
      <div
        className={style.mainContainer}
        onMouseEnter={() => setIsFirstLoad(false)}
        id="slider"
      >
        <div className={style.sliderConteiner}>
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

          <div className={style.conteinerImg}>
            <ul ref={listRef}>
              {imagenBase?.map((item) => (
                <li key={item.id}>
                  {status && (
                    <div
                      className={style.upButton}
                      onClick={() => scrollDelete()}
                    >
                      <img src={editar} alt="Ver noticia" />
                    </div>
                  )}
                  <img
                    src={item.imgUrl}
                    style={{ width: "1920px", height: "958px" }}
                    alt={item.titulo || "Slider Image"}
                  />
                  <div
                    className={style.downButton}
                    onClick={() => scrollDown()}
                  >
                    <img src={abajo} alt="Ver noticia" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.dotsContainer}>
            {imagenBase?.map((_, idx) => (
              <div
                key={idx}
                className={`${style.dotsContainerItem} ${
                  idx === currentIndex ? style.activeDot : ""
                }`}
                onClick={() => goToslide(idx)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
