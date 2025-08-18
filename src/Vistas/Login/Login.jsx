import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../slice/authSlice";
const Login = () => {
  const [formData, setFormData] = useState({ usuario: "", contrasenia: "" });
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState("success");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (nombre, valor) => {
    setFormData((value) => ({
      ...value,
      [nombre]: valor,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://medea.com.ar/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.status == 200) {
        dispatch(login({ estado: true }));
        localStorage.setItem("estado", "true");
        setMessage("Bienvenido al sistema");
        setOpen(true);
        setSnackbar("success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      if (response.status == 404) {
        dispatch(login({ estado: false }));
        localStorage.setItem("estado", "false");
        setMessage("No tiene permiso");
        setOpen(true);
        setSnackbar("error");
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={snackbar}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography component="h1" variant="h5" align="center">
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Usuario"
              type="text"
              variant="outlined"
              margin="normal"
              required
              value={formData.usuario}
              onChange={(e) => handleChange("usuario", e.target.value)}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="text"
              variant="outlined"
              margin="normal"
              required
              value={formData.contrasenia}
              onChange={(e) => handleChange("contrasenia", e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained">
              Entrar
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
