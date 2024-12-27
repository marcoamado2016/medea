import './App.css'
import { Routes,Route, Form, } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import Footer from "./Componentes/Footer/Footer"
import Radio from "./Vistas/Radio/Radio"
import Landing from "./Vistas/Landing/Landing"
import Tv from './Vistas/Tv/Tv'
import Mensaje from './Vistas/Mensaje/Mensaje'
import Ciem from './Vistas/CIEM/Ciem'
import Atletico from './Vistas/Atletico/Atletico'
import EstoSomos from './Componentes/EstoSomos/EstoSomos'
import SerasBendecido from './Componentes/SerasBendecido/SerasBendecido'
import Ibm from './Vistas/Ibm/ibm'
import Cultos from './Vistas/Cultos/Cultos'
import Colaborar from './Vistas/Colaborar/Colaborar'


function App() {

 
  
  return (
  
  <div>
  <div className='app'></div>
  <NavBar/>
    <Routes>
      <Route path="/" element={<Landing/>}/><Route />
      <Route path="/quienes" element={<EstoSomos/>}/><Route />
      <Route path="/radio" element={<Radio/>}/><Route />
      <Route path="/tv" element={<Tv/>}/><Route />
      <Route path="/mensaje" element={<Mensaje/>}/><Route />
      <Route path="/ciem" element={<Ciem/>}/><Route />
      <Route path="/atletico" element={<Atletico/>}/><Route />
      <Route path="/ser" element={<SerasBendecido/>}/><Route />
      <Route path="/ibm" element={<Ibm/>}/><Route />
      <Route path="/cultos" element={<Cultos/>}/><Route />
      <Route path="/colaborar" element={<Colaborar/>}/><Route />
    </Routes>
    <Footer/>
  </div>
  )
}

export default App
