import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogActions,
  TextField,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
const SubirFotosModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    imagen: null,
    noticia: "",
    titulo: "",
  });
  const handleChange = (nombre, valor) => {
    setFormData((value) => ({
      ...value,
      [nombre]: valor,
    }));
  };
  const handleGuardar = async (formData) => {
    const data = new FormData();
    data.append("imagen", formData.imagen);
    data.append("noticia", formData.noticia);
    data.append("titulo", formData.titulo);
    try {
      const response = await fetch("https://medea.com.ar/files.php", {
        method: "POST",

        body: data,
      });
    } catch (error) {
      console.log("ERROR SUBIR FOTOS ", error);
    }
  };
  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogTitle>Subir Fotos</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Imagen del home</Typography>
          <Button
            variant="contained"
            component="label"
            startIcon={<PhotoCamera />}
          >
            Seleccionar
            <input
              hidden
              accept="image/*"
              type="file"
              name="imagen"
              onChange={(e) => {
                handleChange("imagen", e.target.files[0]);
              }}
            />
          </Button>
          {formData.imagen && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Seleccionada: {formData.imagen.name}
            </Typography>
          )}
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1">Titulo</Typography>
          <TextField
            fullWidth
            name="titulo"
            value={formData.titulo}
            onChange={(e) => {
              handleChange("titulo", e.target.value);
            }}
          />
          <Typography variant="subtitle1">Noticias</Typography>
          <TextField
            multiline
            fullWidth
            multiple
            name="noticia"
            value={formData.noticia}
            onChange={(e) => {
              handleChange("noticia", e.target.value);
            }}
            rows={10}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={() => handleGuardar(formData)} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubirFotosModal;
