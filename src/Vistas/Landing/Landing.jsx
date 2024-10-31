import './Landing.css';
import radio from '../../assets/index_14.jpg';
import tv from '../../assets/index_16.jpg';
import banner from '../../assets/banner-01.jpg';

const Landing = () => {
  return (
    <div>
      <div className='nube-principal'>
        <img src={banner} alt="Banner principal" />
      </div>
      <div className='medios'>
        <div className='medios-tittle'>
          <h1>Aqui estamos</h1>
        </div>
        <div className='medios-imagenes'>
          <img src={radio} alt="Imagen de radio" />
          <img src={tv} alt="Imagen de televisión" />
        </div>
        <div>
          <a>

          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;