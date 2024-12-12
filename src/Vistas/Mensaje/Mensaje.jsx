import style from  './Mensaje.module.css'



const Mensaje =()=>{
    return(
        <div className={style.ContainerForm}>
         <section className={style.SectionForm}>
         <div className={style.tituloForm}>
              <h1>No estas solo</h1>
         </div>
            <div className={style.InputForm}>
              <input type="text" placeholder="Nombre" ></input>
              <input type="text" placeholder="Telefono"></input>
              <textarea
            placeholder="Petición"
            className={`${style.InputField} ${style.TextArea}`}
          ></textarea>
            </div>
            <div className={style.ButtonContainer}>
            <button className={style.SubmitButton}>Enviar</button>
            </div>
         </section>
        </div>
    )
}
export default Mensaje;