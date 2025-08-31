import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
const ModalEdit = ({ edit, setEdit, imagenEdit }) => {
  const [formData, setFormData] = useState({
    imagen1: null,
    noticia1: "",
    titulo1: "",
    checked1: false,
    imagenes1: [],
    id: null,
  });
  const onClose = () => {
    setEdit(false);
  };
  const handleChange = (nombre, valor) => {
    setFormData((value) => ({
      ...value,
      [nombre]: valor,
    }));
  };

  useEffect(() => {
    if (imagenEdit) {
      setFormData({
        imagen1: imagenEdit?.imgUrl?.split("/")[4]?.split("_")[1],
        noticia1: imagenEdit?.noticia1,
        titulo1: imagenEdit?.titulo1,
        imagenes1: [],
        id: imagenEdit?.id,
      });
    }
  }, [imagenEdit]);

  const handleGuardar = async (formData) => {
    const data = new FormData();
    data.append("imagen1", formData.imagen1);
    if (formData.noticia1 !== undefined && formData.noticia1 !== null) {
      data.append("noticia1", formData.noticia1);
    }

    if (formData.titulo1 !== undefined && formData.titulo1 !== null) {
      data.append("titulo1", formData.titulo1);
    }
    data.append("checked1", formData.checked1);
    data.append("id", formData.id);
    for (const element of formData.imagenes1) {
      data.append("imagenes1[]", element);
    }
    try {
      fetch("https://medea.com.ar/editarFile.php", {
        method: "POST",
        body: data,
      }).then((data) => {
        setEdit(false);
      });
    } catch (error) {
      console.log("ERROR DELETE ", error);
    }
  };
  return (
    <Dialog open={edit} fullWidth maxWidth="sm" onClose={onClose}>
      <DialogContent dividers>
        <Grid container direction="column" spacing={3}>
          <Paper
            elevation={3}
            sx={{ p: 3, borderRadius: 2, mb: 3 }}
            style={{ background: grey[100] }}
          >
            <Grid item>
              <DialogTitle>Noticia </DialogTitle>
            </Grid>
            <Grid container item justifyContent={"flex-end"}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.checked1 || false}
                    onChange={(e) => {
                      handleChange("checked1", e.target.checked);
                    }}
                  />
                }
              />
            </Grid>
            <Grid item>
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
                  required
                  onChange={(e) => {
                    handleChange("imagen1", e.target.files[0]);
                  }}
                />
              </Button>
              {(formData?.imagen1 || imagenEdit?.imgUrl) && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Seleccionada:{" "}
                  {formData?.imagen1?.name ||
                    imagenEdit?.imgUrl?.split("/")[4]?.split("_")[1]}
                </Typography>
              )}
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">Título</Typography>
              <TextField
                fullWidth
                name="titulo"
                value={formData.titulo1 || imagenEdit?.titulo}
                onChange={(e) => handleChange("titulo1", e.target.value)}
              />
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">Noticias</Typography>
              <TextField
                multiline
                fullWidth
                name="noticia"
                value={formData.noticia1 || imagenEdit?.noticia}
                onChange={(e) =>
                  handleChange(
                    "noticia1",
                    e.target.value || imagenEdit?.noticia
                  )
                }
                rows={10}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCamera />}
              >
                Seleccionar imagenes
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  name="imagen"
                  required
                  multiple
                  onChange={(e) => {
                    handleChange("imagenes1", e.target.files);
                  }}
                />
              </Button>
              {(formData.imagenes1 ||
                imagenEdit?.imagenesRelacionadas?.length) && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  cantidad de imagenes Seleccionadas:
                  {formData.imagenes1?.length ||
                    imagenEdit?.imagenesRelacionadas?.length}
                </Typography>
              )}
            </Grid>
          </Paper>
        </Grid>
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

export default ModalEdit;
