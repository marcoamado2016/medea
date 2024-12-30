import React, { useState } from 'react';
import style from './Mensaje.module.css';

const Mensaje = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    peticion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    
    console.log('Formulario enviado:', formData);

    
    setFormData({
      nombre: '',
      telefono: '',
      peticion: '',
    });
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
