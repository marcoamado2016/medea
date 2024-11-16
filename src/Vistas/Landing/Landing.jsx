import './Landing.css';
import radio from '../../assets/index_14.jpg';
import tv from '../../assets/index_16.jpg';
import notisomos from '../../assets/Noticias-1.jpg'
import notisomos2 from '../../assets/Noticias-2.jpg'
import notisomos3 from '../../assets/Noticias-3.jpg'
import notisomos4 from '../../assets/Noticias-3-27.jpg'
import EstoSomos from '../../Componentes/EstoSomos/EstoSomos';
import SerasBendecido from '../../Componentes/SerasBendecido/SerasBendecido';
import Concejeria from '../../Componentes/Concejeria/Concejeria';
import Parallax from '../../Componentes/Parallax/Parallax';
import Slider from '../../Componentes/Silder/Silder';


const Landing = () => {
  return (
<div>
<Parallax/>
 <div className='medios'>


 
  </div>
     <div className='noticias'>
     <Slider/>
     </div>
     <Concejeria/>
     <EstoSomos/>
     <SerasBendecido/>
</div>
     
  );
};

export default Landing;