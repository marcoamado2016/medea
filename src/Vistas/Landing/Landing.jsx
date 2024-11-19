import './Landing.css';
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