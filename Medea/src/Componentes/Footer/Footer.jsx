import "./Footer.css"
import whats from "../../assets/whatsappFooter.png"
import insta from "../../assets/instaFooter.png"
import email from "../../assets/mail.png"



const Footer =()=>{

    return(
        <div className="Footer">
          <p> Copyright @ 2024 _ All Right Reserved. Pomo agencia </p>
          <div>
        <p> Contacto</p>
        <img src={whats}></img>
        <img src={email}></img>
        <img src={insta}></img>
          </div>

        </div>
    )
}
export default Footer