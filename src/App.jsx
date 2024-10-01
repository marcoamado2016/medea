import { Routes,Route, } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import QuienesSomos from "./Vistas/QuienesSomos/QuienesSomos"
import Footer from "./Componentes/Footer/Footer"
import Contacto from "./Vistas/Contacto/Contacto"



function App() {

 
  
  return (
    <div>
  <NavBar/>
    <Routes>
      <Route path="/quienes" element={<QuienesSomos/>}/><Route />
      <Route path="/contact" element={<Contacto/>}/><Route />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
