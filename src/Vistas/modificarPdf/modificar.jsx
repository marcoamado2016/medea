import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogActions,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const ModificarPdf = ({ open, setOpen, articulo }) => {
  console.log("PDF11111 ", articulo);
  const [formData, setFormData] = useState({
    titulo: "",
    fecha: new Date().toISOString()?.split("T")[0],
    url_pdf: "",
    link: "",
    id: 0,
    pdf: "",
  });
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (articulo) {
      setFormData({
        fecha: articulo?.fecha,
        url_pdf: articulo?.url_pdf,
        titulo: articulo?.titulo,
        link: articulo?.link,
        id: articulo?.id,
      });
    }
  }, [articulo]);
  const limpiarCampos = () => {
    setFormData({
      fecha: new Date().toISOString()?.split("T")[0],
      url_pdf: "",
      titulo: "",
      link: "",
      pdf: "",
    });
  };
  const handleChange = (nombre, valor) => {
    setFormData((value) => ({
      ...value,
      [nombre]: valor,
    }));
  };
  const handleGuardar = async (formData) => {
    const data = new FormData();
    if (formData?.titulo != undefined && formData.titulo != null) {
      data.append("titulo", formData?.titulo);
    }

    if (formData?.pdf != undefined && formData.pdf != null) {
      data.append("pdf", formData?.pdf);
    }
    if (formData?.fecha != undefined && formData?.fecha != null) {
      data.append("fecha", formData?.fecha);
    }
    if (formData?.link != undefined && formData?.link != null) {
      data.append("link", formData?.link);
    }
    data.append("id", formData.id);

    fetch("https://medea.com.ar/editarPredica.php", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("PDF data ", data);
        if (data.success == true) {
          limpiarCampos();
          alert("La predica ok");
          location.reload();
        }
      })
      .catch((error) => {
        console.log("ERROR EDITAR PREDICA", error);
      });
  };
  return (
    <Dialog open={open} fullWidth maxWidth="sm" onClose={onClose}>
      <DialogContent dividers>
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 2, mb: 3 }}
          style={{ background: grey[100] }}
        >
          <Grid item>
            <DialogTitle>Modificar predica</DialogTitle>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1"> Titulo</Typography>
            <TextField
              fullWidth
              name="titulo"
              value={formData.titulo}
              required={true}
              onChange={(e) => handleChange("titulo", e.target.value)}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Fecha</Typography>
            <TextField
              fullWidth
              name="fecha"
              type="date"
              value={formData.fecha}
              required={true}
              onChange={(e) => handleChange("fecha", e.target.value)}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Ingresar el link de la predica
            </Typography>
            <TextField
              fullWidth
              name="link"
              type="text"
              value={formData.link}
              required={true}
              onChange={(e) => handleChange("link", e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              component="label"
              startIcon={<PictureAsPdfIcon />}
              required={true}
            >
              Seleccionar predica
              <input
                hidden
                accept="application/pdf"
                type="file"
                name="pdf"
                required
                onChange={(e) => {
                  handleChange("pdf", e.target.files[0]);
                }}
              />
            </Button>
            {formData.pdf && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                Seleccionada: {formData.pdf.name}
              </Typography>
            )}
          </Grid>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          style={{ background: red[900] }}
        >
          Cancelar
        </Button>
        <Button onClick={() => handleGuardar(formData)} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModificarPdf;
