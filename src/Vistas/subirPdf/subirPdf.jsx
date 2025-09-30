import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Grid,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const SubirPdf = ({ pdf, setPdf }) => {
  console.log("PDF ", pdf);
  const [formData, setFormData] = useState({
    titulo: "",
    fecha: new Date().toISOString()?.split("T")[0],
    pdf: "",
    link: "",
  });
  const onClose = () => {
    setPdf(false);
    location.reload();
  };
  const limpiarCampos = () => {
    setFormData({
      fecha: new Date().toISOString()?.split("T")[0],
      pdf: "",
      titulo: "",
      link: "",
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
    data.append("titulo", formData?.titulo);
    data.append("pdf", formData?.pdf);
    data.append("fecha", formData?.fecha);
    data.append("link", formData?.link);
    console.log("PDF ", formData.pdf);
    try {
      fetch("https://medea.com.ar/pdf.php", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("PDF data ", data);
          if (data.success == true) {
            limpiarCampos();
            alert("La predica ok");
          }
        })
        .catch((error) => {});
    } catch (error) {}
  };
  return (
    <Dialog open={pdf} fullWidth maxWidth="sm" onClose={onClose}>
      <DialogContent dividers>
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 2, mb: 3 }}
          style={{ background: grey[100] }}
        >
          <Grid item>
            <DialogTitle>Subir predica</DialogTitle>
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

export default SubirPdf;
