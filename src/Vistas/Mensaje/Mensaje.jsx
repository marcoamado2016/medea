import React, { useState } from "react";
import axios from "axios";
import style from "./Mensaje.module.css";





const Mensaje = () => {
  const [formData, setFormData] = useState({ nombre: "", telefono: "", peticion: "" });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const requestData = {
    nombre: formData.nombre,
    telefono: formData.telefono,
    peticion: formData.peticion,
  }
  const handleSubmit = async () => {
    if (!formData.nombre || !formData.telefono || !formData.peticion) {
      alert("Por favor, completa todos los campos.");
      return;
  
    }
    console.log(formData)
    setIsSending(true);

    
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzDQya6aF64rUtd8D90RjDEC7nlWRM8LJwAuW_S_Gw4tstC1mvgWSszYjL3Epl7umY/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: "Juan Pérez",
          telefono: "123456789",
          peticion: "Solicito información"
        }),
      })
      const data = await response.json();
      console.log(data);
      alert("Datos enviados correctamente.");
      setFormData({ nombre: "", telefono: "", peticion: "" });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un error al enviar los datos. Inténtalo de nuevo.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={style.ContainerForm}>
      <section className={style.SectionForm}>
        <div className={style.tituloForm}>
          <h1>No estás solo</h1>
        </div>
        <div className={style.InputForm}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
          <textarea
            name="peticion"
            placeholder="Petición"
            className={`${style.InputField} ${style.TextArea}`}
            value={formData.peticion}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className={style.ButtonContainer}>
          <button className={style.SubmitButton} onClick={handleSubmit} disabled={isSending}>
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mensaje;


