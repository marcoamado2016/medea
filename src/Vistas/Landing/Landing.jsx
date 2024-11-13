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


const Landing = () => {
  return (
<div>

 <div className='medios'>

  <div className='iconos'>
    <div className='titulo'>
      <h1>AQUÍ ESTAMOS</h1>
    </div>
    <div>
      <img src={tv}></img>
      <img src={radio}></img>
    </div>
    <div className='texto-Landing'>
        <a>El Ministerio M.E.D.E.A , con 41 años de misión, difunde el evangelio globalmente mediante tecnología y medios, alcanzando a quienes no puedan asistir en persona. Brinda apoyo espiritual a personas privadas de libertad y mantiene una presencia continua a través de "Libertad en la red" y "Un mensaje al Corazon". Su labor busca transformar vidas con mensaje de esperanza y amor a Dios</a>

    </div> 

    </div>
     
      
     </div>
     <div className='noticias1'>
      <img src={notisomos} className='imagen1'></img>
      <img src={notisomos2} className='imagen2'></img>
     </div>
     <div className='noticias2'>
      <img src={notisomos3} className='imagen3'></img>
      <img src={notisomos4} className='imagen4'></img>
     </div>
     <Concejeria/>
     <EstoSomos/>
     <SerasBendecido/>
</div>
     
  );
};

export default Landing;