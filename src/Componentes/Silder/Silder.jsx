import style from "./Slider.module.css";
import { useRef, useState, useEffect } from "react";
import izqu from "../../assets/flechaiz_.png";
import derec from "../../assets/flechader.png";
import abajo from "../../assets/botonAbajo.png";
import editar from "../../assets/editar.png";
import { Snackbar, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import ModalEdit from "./modal.edit";
const Slider = ({ setOpen, setNoticia }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [imagenBase, setImagen] = useState([]);
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const status = useSelector((state) => state.auth.estado);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    cargarImage();
  }, []);
  
  useEffect(() => {
    cargarImage();
  }, [refresh]);

  useEffect(()=>{
    cargarImage();
  },[edit])
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
  const scrollEdit = () => {
    setEdit(true);
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
          {"Imagen Modificada"}
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
                      onClick={() => scrollEdit()}
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
      <ModalEdit
        edit={edit}
        setEdit={setEdit}
        imagenEdit={imagenBase[currentIndex]}
      />
    </>
  );
};

export default Slider;
