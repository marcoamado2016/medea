import style from "./Colaborar.module.css"
import texto from "../../assets/TEXTOColaborar.png"


const Colaborar = () => {


const upScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

    return(
        <div className={style.colaborar} >
        <div className={style.texto} onClick={upScroll}>
        <img src={texto} >

        </img>

        </div>


        </div>
    )
}
export default Colaborar;
