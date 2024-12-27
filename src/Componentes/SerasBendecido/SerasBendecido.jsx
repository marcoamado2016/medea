import style from './SerasBendecido.module.css'
import { useNavigate } from 'react-router'


const SerasBendecido =()=>{
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/colaborar')
    }
    

    return(
     <div className={style.container} 
     onClick={handleNavigate}
     >
      <h1>
      <span >
      Ser 
      </span>
      <span>
      bendicido
      </span>
      </h1>
      
        
     </div>
    )
}

export default SerasBendecido