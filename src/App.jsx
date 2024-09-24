import { Routes,Route, } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import QuienesSomos from "./Vistas/QuienesSomos/QuienesSomos"
import Footer from "./Componentes/Footer/Footer"



function App() {

 
  
  return (
    <div>
  <NavBar/>
    <Routes>
      <Route path="/quienes" element={<QuienesSomos/>}/>
      <Route />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
