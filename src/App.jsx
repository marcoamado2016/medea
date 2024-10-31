import { Routes,Route, } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import QuienesSomos from "./Vistas/QuienesSomos/QuienesSomos"
import Footer from "./Componentes/Footer/Footer"
import Contacto from "./Vistas/Contacto/Contacto"
import Radio from "./Vistas/Radio/Radio"
import Landing from "./Vistas/Landing/Landing"



function App() {

 
  
  return (
    <div>
  <NavBar/>
    <Routes>
      <Route path="/" element={<Landing/>}/><Route />
      <Route path="/quienes" element={<QuienesSomos/>}/><Route />
      <Route path="/contact" element={<Contacto/>}/><Route />
      <Route path="/radio" element={<Radio/>}/><Route />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
