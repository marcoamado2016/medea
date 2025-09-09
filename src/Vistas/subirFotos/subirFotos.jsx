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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import { grey, red } from "@mui/material/colors";
const SubirFotosModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    imagen1: null,
    noticia1: "",
    titulo1: "",
    imagen2: null,
    noticia2: "",
    titulo2: "",
    imagen3: null,
    noticia3: "",
    titulo3: "",
    imagen4: null,
    noticia4: "",
    titulo4: "",
    imagen5: null,
    noticia5: "",
    titulo5: "",
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    imagenes1: [],
    imagenes2: [],
    imagenes3: [],
    imagenes4: [],
    imagenes5: [],
  });
  const [error, setError] = useState(false);
  const handleChange = (nombre, valor) => {
    // console.log("NOMBRE ", nombre, " valor ", valor);
    setFormData((value) => ({
      ...value,
      [nombre]: valor,
    }));
  };
  const handleGuardar = async (formData) => {
    console.log("DATA ", formData);
    const data = new FormData();
    data.append("imagen1", formData.imagen1);
    data.append("noticia1", formData.noticia1);
    data.append("titulo1", formData.titulo1);
    data.append("checked1", formData.checked1);
    for (const element of formData.imagenes1) {
      data.append("imagenes1[]", element);
    }
    data.append("imagen2", formData.imagen2);
    data.append("noticia2", formData.noticia2);
    data.append("titulo2", formData.titulo2);
    data.append("checked2", formData.checked2);
    for (const element of formData.imagenes2) {
      data.append("imagenes2[]", element);
    }

    data.append("imagen3", formData.imagen3);
    data.append("noticia3", formData.noticia3);
    data.append("titulo3", formData.titulo3);
    data.append("checked3", formData.checked3);

    for (const element of formData.imagenes3) {
      data.append("imagenes3[]", element);
    }

    data.append("imagenes3", formData.imagenes3);
    data.append("imagen4", formData.imagen4);
    data.append("noticia4", formData.noticia4);
    data.append("titulo4", formData.titulo4);
    data.append("checked4", formData.checked4);
    for (const element of formData.imagenes4) {
      data.append("imagenes4[]", element);
    }

    data.append("imagen5", formData.imagen5);
    data.append("noticia5", formData.noticia5);
    data.append("titulo5", formData.titulo5);
    data.append("checked5", formData.checked5);
    for (const element of formData.imagenes5) {
      data.append("imagenes5[]", element);
    }

    try {
      fetch("https://medea.com.ar/files.php", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.sucess == false) {
            setError(true);
          } else {
            setError(false);
            onClose();
          }
          window.location.reload();
        });
    } catch (error) {
      console.log("ERROR SUBIR FOTOS ", error);
    }
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={error}
        autoHideDuration={4000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setError(false)}
          severity={"error"}
          sx={{ width: "100%" }}
        >
          {"Falto subir la imagen"}
        </Alert>
      </Snackbar>
      <Dialog open={open} fullWidth maxWidth="sm" onClose={onClose}>
        <DialogContent dividers>
          <Grid container direction="column" spacing={3}>
            <Paper
              elevation={3}
              sx={{ p: 3, borderRadius: 2, mb: 3 }}
              style={{ background: grey[100] }}
            >
              <Grid item>
                <DialogTitle>Noticia 1</DialogTitle>
              </Grid>
              <Grid container item justifyContent={"flex-end"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.checked1 || false}
                      onChange={(e) => {
                        handleChange("checked1", e.target.checked);
                      }}
                      disabled={
                        formData.noticia1.length < 1673 &&
                        formData.noticia1 != ""
                      }
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
                {formData.imagen1 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Seleccionada: {formData.imagen1.name}
                  </Typography>
                )}
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Título</Typography>
                <TextField
                  fullWidth
                  name="titulo"
                  value={formData.titulo1}
                  onChange={(e) => handleChange("titulo1", e.target.value)}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Noticias</Typography>
                <TextField
                  multiline
                  fullWidth
                  name="noticia"
                  value={formData.noticia1}
                  onChange={(e) => {
                    const valor = e.target.value.slice(0, 1673);
                    handleChange("noticia1", valor);
                  }}
                  rows={10}
                  label={
                    "Para enviar la noticia debera ingresar 1673 caracteres"
                  }
                  inputProps={{ maxLength: 1150 }}
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
                {formData.imagenes1 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    cantidad de imagenes Seleccionadas:
                    {formData.imagenes1.length}
                  </Typography>
                )}
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              sx={{ p: 3, borderRadius: 2, mb: 3 }}
              style={{ background: grey[100] }}
            >
              <Grid item>
                <DialogTitle>Noticia 2</DialogTitle>
              </Grid>
              <Grid container item justifyContent={"flex-end"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.checked2 || false}
                      onChange={(e) => {
                        handleChange("checked2", e.target.checked);
                      }}
                      disabled={
                        formData.noticia2.length < 1673 &&
                        formData.noticia2 != ""
                      }
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
                      handleChange("imagen2", e.target.files[0]);
                    }}
                  />
                </Button>
                {formData.imagen2 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Seleccionada: {formData.imagen2.name}
                  </Typography>
                )}
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Título</Typography>
                <TextField
                  fullWidth
                  name="titulo"
                  value={formData.titulo2}
                  onChange={(e) => handleChange("titulo2", e.target.value)}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Noticias</Typography>
                <TextField
                  multiline
                  fullWidth
                  name="noticia"
                  value={formData.noticia2}
                  onChange={(e) => {
                    const valor = e.target.value.slice(0, 1673);
                    handleChange("noticia2", valor);
                  }}
                  rows={10}
                  label={
                    "Para enviar la noticia debera ingresar 1673 caracteres"
                  }
                  inputProps={{ maxLength: 1673 }}
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
                      handleChange("imagenes2", e.target.files);
                    }}
                  />
                </Button>
                {formData.imagenes2 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    cantidad de imagenes Seleccionadas:
                    {formData.imagenes2.length}
                  </Typography>
                )}
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              sx={{ p: 3, borderRadius: 2, mb: 3 }}
              style={{ background: grey[100] }}
            >
              <Grid item>
                <DialogTitle>Noticia 3</DialogTitle>
              </Grid>
              <Grid container item justifyContent={"flex-end"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.checked3 || false}
                      onChange={(e) => {
                        handleChange("checked3", e.target.checked);
                      }}
                      disabled={
                        formData.noticia3.length < 1673 &&
                        formData.noticia3 != ""
                      }
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
                      handleChange("imagen3", e.target.files[0]);
                    }}
                  />
                </Button>
                {formData.imagen3 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Seleccionada: {formData.imagen3.name}
                  </Typography>
                )}
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Título</Typography>
                <TextField
                  fullWidth
                  name="titulo"
                  value={formData.titulo3}
                  onChange={(e) => handleChange("titulo3", e.target.value)}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Noticias</Typography>
                <TextField
                  multiline
                  fullWidth
                  name="noticia"
                  value={formData.noticia3}
                  onChange={(e) => {
                    const valor = e.target.value.slice(0, 1673);
                    handleChange("noticia3", valor);
                  }}
                  rows={10}
                  label={
                    "Para enviar la noticia debera ingresar 1673 caracteres"
                  }
                  inputProps={{ maxLength: 1673 }}
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
                      handleChange("imagenes3", e.target.files);
                    }}
                  />
                </Button>
                {formData.imagenes3 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    cantidad de imagenes Seleccionadas:
                    {formData.imagenes3.length}
                  </Typography>
                )}
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              sx={{ p: 3, borderRadius: 2, mb: 3 }}
              style={{ background: grey[100] }}
            >
              <Grid item>
                <DialogTitle>Noticia 4</DialogTitle>
              </Grid>
              <Grid container item justifyContent={"flex-end"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.checked4 || false}
                      onChange={(e) => {
                        handleChange("checked4", e.target.checked);
                      }}
                      disabled={
                        formData.noticia4.length < 1673 &&
                        formData.noticia4 != ""
                      }
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
                      handleChange("imagen4", e.target.files[0]);
                    }}
                  />
                </Button>
                {formData.imagen4 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Seleccionada: {formData.imagen4.name}
                  </Typography>
                )}
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Título</Typography>
                <TextField
                  fullWidth
                  name="titulo"
                  value={formData.titulo4}
                  onChange={(e) => handleChange("titulo4", e.target.value)}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Noticias</Typography>
                <TextField
                  multiline
                  fullWidth
                  name="noticia"
                  value={formData.noticia4}
                  onChange={(e) => {
                    const valor = e.target.value.slice(0, 1673);
                    handleChange("noticia4", valor);
                  }}
                  rows={10}
                  inputProps={{ maxLength: 1673 }}
                  label={
                    "Para enviar la noticia debera ingresar 1673 caracteres"
                  }
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
                      handleChange("imagenes4", e.target.files);
                    }}
                  />
                </Button>
                {formData.imagenes4 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    cantidad de imagenes Seleccionadas:
                    {formData.imagenes4.length}
                  </Typography>
                )}
              </Grid>
            </Paper>
            <Paper
              elevation={3}
              sx={{ p: 3, borderRadius: 2, mb: 3 }}
              style={{ background: grey[100] }}
            >
              <Grid item>
                <DialogTitle>Noticia 5</DialogTitle>
              </Grid>
              <Grid container item justifyContent={"flex-end"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.checked5 || false}
                      onChange={(e) => {
                        handleChange("checked5", e.target.checked);
                      }}
                      disabled={
                        formData.noticia5.length < 1673 &&
                        formData.noticia5 != ""
                      }
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
                      handleChange("imagen5", e.target.files[0]);
                    }}
                  />
                </Button>
                {formData.imagen5 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Seleccionada: {formData.imagen5.name}
                  </Typography>
                )}
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Título</Typography>
                <TextField
                  fullWidth
                  name="titulo"
                  value={formData.titulo5}
                  onChange={(e) => handleChange("titulo5", e.target.value)}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Noticias</Typography>
                <TextField
                  multiline
                  fullWidth
                  name="noticia"
                  value={formData.noticia5}
                  onChange={(e) => {
                    const valor = e.target.value.slice(0, 1673);
                    handleChange("noticia5", valor);
                  }}
                  rows={10}
                  inputProps={{ maxLength: 1673 }}
                  label={
                    "Para enviar la noticia debera ingresar 1673 caracteres"
                  }
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
                      handleChange("imagenes5", e.target.files);
                    }}
                  />
                </Button>
                {formData.imagenes5 && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    cantidad de imagenes Seleccionadas:
                    {formData.imagenes5.length}
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
    </>
  );
};

export default SubirFotosModal;
