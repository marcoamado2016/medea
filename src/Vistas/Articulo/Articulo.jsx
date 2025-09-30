import {
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import contenedorarticulo from "./contenedorarticulo.png";
import editar from "./editar.png";
import pdf from "./pdf.png";
import play from "./play.png";
import style from "./Pdf.module.css";
import { useEffect, useState } from "react";
import ModificarPdf from "../modificarPdf/modificar";
import { useSelector } from "react-redux";
import articulos from "./articulos.png";
const Articulo = () => {
  const [pdfs, setPdfs] = useState([]);
  const [open, setOpen] = useState(false);
  const status = useSelector((state) => state.auth.estado);
  const [pdfSeleccionado, setPdfSeleccionado] = useState({
    titulo: "",
    url_pdf: "",
    link: "",
    fecha: "",
  });
  useEffect(() => {
    cargarArticulos();
  }, []);
  const cargarArticulos = () => {
    fetch("https://medea.com.ar/obtenerPdfs.php")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPdfs(data.data);
      });
  };
  const abrirPDF = (url) => {
    window.open(url, "_blank");
  };
  const modificarPredica = (art) => {
    if (art) {
      setPdfSeleccionado({
        fecha: art?.fecha,
        link: art?.link,
        titulo: art?.titulo,
        url_pdf: art.url_pdf,
        id: art.id,
      });
      setOpen(true);
    }
  };
  const abrirYoutube = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Grid
        container
        className={style.pdf}
        spacing={4}
        sx={{ p: 4, bgcolor: "#111", color: "#fff" }}
        direction="row"
      >
        {/* Columna izquierda: texto */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{ maxWidth: "400px", marginTop: "200px", marginLeft: "80px" }}
          >
            <Typography variant="h3">
              <img src={articulos} alt="articulos" />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "50px",
                fontFamily: "'Titillium Web', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "#bbb8be",
                width: 430,
              }}
            >
              Cada resumen es una semilla de lo que Dios nos habló durante la
              semana. Sabemos que hay mensajes que tocan el corazón de forma
              especial, y por eso creemos en la importancia de volver a ellos,
              repasarlos, compartirlos o simplemente dejar que sigan obrando en
              nuestro interior.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "40px",
                fontFamily: "'Titillium Web', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "#bbb8be",
                width: 430,
              }}
            >
              Cada prédica que subimos lleva un mensaje con propósito, palabras
              que sanan, desafían y animan. Este espacio está pensado para vos,
              para que no te pierdas nada y puedas llevarte algo de Dios a donde
              estés, en el momento que lo necesites.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              bgcolor: "#7e0a0aff",
              borderRadius: 3,
              overflow: "hidden",
              width: "50%",
              marginLeft: "700px",
              marginTop: "-500px",
              background: "transparent",
              mixBlendMode: "lighten",
            }}
          >
            <img
              src={contenedorarticulo}
              alt="Desierto"
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />

            {/* Lista de artículos */}
            <CardContent>
              {pdfs?.map((art) => (
                <List >
                  <ListItem
                    key={art.id}
                    divider
                    secondaryAction={
                      <div className={style.botones}>
                        {status && (
                          <div className={style.descarga}>
                            <img
                              src={editar}
                              alt="editar"
                              onClick={() => modificarPredica(art)}
                            />
                          </div>
                        )}

                        <div>
                          <img
                            src={pdf}
                            alt="pdf"
                            onClick={() => abrirPDF(art?.url_pdf)}
                          />
                        </div>
                        <div className={style.play}>
                          <img
                            src={play}
                            alt="play"
                            onClick={() => abrirYoutube(art?.link)}
                          />
                        </div>
                      </div>
                    }
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'The Seasons', sans-serif",
                        fontWeight: 400,
                        fontSize: "32px",
                        width: "50px",
                        color: art.destacado ? "#f9b233" : "#fff",
                      }}
                    >
                      {art.fecha?.split("-")[2]}
                    </Typography>

                    {/* Título */}
                    <ListItemText
                      key={art.id}
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: "bold",
                            color: art.destacado ? "#f9b233" : "#fff",
                            textTransform: "uppercase",
                            fontFamily: "Akira Expanded, sans-serif",
                            marginLeft: "20px",
                          }}
                        >
                          {art.titulo}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ModificarPdf open={open} setOpen={setOpen} articulo={pdfSeleccionado} />
    </>
  );
};

export default Articulo;
