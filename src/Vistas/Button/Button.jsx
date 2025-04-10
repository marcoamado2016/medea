import React, { useState } from "react";
import * as XLSX from "xlsx";
import style from "./Button.module.css";

const Mensaje = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    peticion: "",
  });
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Input cambiado:", name, value);
  };

  const handleSubmit = () => {
    console.log("Formulario enviado:", formData);
    setEntries([...entries, formData]);
    setFormData({ nombre: "", telefono: "", peticion: "" });
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(entries);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");
    XLSX.writeFile(workbook, "datos.xlsx");
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
          <button className={style.DownloadButton} onClick={handleDownload}>
            Descargar Excel
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mensaje;
