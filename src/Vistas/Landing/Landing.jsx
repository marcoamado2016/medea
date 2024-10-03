import './Landing.css'
import youtube from '../../assets/social_media_logo_you_tube_icon-icons.com_59065.png'
import whats from '../../assets/social_media_logo_whatsapp_icon-icons.com_59066.png'
import face from '../../assets/social_media_logo_facebook_icon-icons.com_59059.png'
import inst from '../../assets/socialinsta.png'



const Landing =()=>{
    return(
    <div className='container'>
      <div className='Landing'>
      <div className='texto'>
        <h1>Algo mas que reunirnos</h1>
      </div>
      <div className='boton'>
        <button>ir a reuniones</button>
      </div>
        <div className='container-Iconos'>
        
              
              <img src={inst}></img>
              <img src={face}></img>
              <img src={whats}></img>
              <img src={youtube}></img>

                


        </div>

      </div>

     
    </div>
    )
}

export default Landing