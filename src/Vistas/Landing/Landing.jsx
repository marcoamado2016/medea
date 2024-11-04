import './Landing.css';
import radio from '../../assets/index_14.jpg';
import tv from '../../assets/index_16.jpg';
import fondo from '../../assets/home_02.jpg';

const Landing = () => {
  return (
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
  );
};

export default Landing;