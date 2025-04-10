import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import style from "./Mensaje.module.css";

const Mensaje = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    peticion: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    emailjs
      .send(
        "service_3j4fucc",
        "template_ucq3dla",
        {
          title: "Nuevo pedido de oración",
          name: formData.nombre,
          time: new Date().toLocaleString(),
          message: formData.peticion,
          email: "marcos242016@gmail.com",
          telefono: formData.telefono,
        },
        "1A4pExR15gOAYEkYl"
      )
      .then(() => {
        alert("Tu oración fue enviada correctamente ❤️");
        setFormData({ nombre: "", telefono: "", peticion: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el correo ❌", error);
        alert("Hubo un problema al enviar el correo.");
      });
    setFormData({ nombre: "", telefono: "", peticion: "" });
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
          <button className={style.SubmitButton} onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mensaje;
