import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Componentes/NavBar/NavBar";
import Footer from "./Componentes/Footer/Footer";
import Radio from "./Vistas/Radio/Radio";
import Landing from "./Vistas/Landing/Landing";
import Tv from "./Vistas/Tv/Tv";
import Mensaje from "./Vistas/Mensaje/Mensaje";
import Ciem from "./Vistas/CIEM/Ciem";
import Atletico from "./Vistas/Atletico/Atletico";
import EstoSomos from "./Componentes/EstoSomos/EstoSomos";
import SerasBendecido from "./Componentes/SerasBendecido/SerasBendecido";
import Ibm from "./Vistas/Ibm/ibm";
import Cultos from "./Vistas/Cultos/Cultos";
import Colaborar from "./Vistas/Colaborar/Colaborar";
import Button from "./Vistas/Button/Button";
import Loguin from "./Vistas/Loguin/Loguin";

// Importamos el Contexto Global

function App() {
  return (
    <div>
      <div className="app"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quienes" element={<EstoSomos />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/mensaje" element={<Mensaje />} />
        <Route path="/ciem" element={<Ciem />} />
        <Route path="/atletico" element={<Atletico />} />
        <Route path="/ser" element={<SerasBendecido />} />
        <Route path="/ibm" element={<Ibm />} />
        <Route path="/cultos" element={<Cultos />} />
        <Route path="/colaborar" element={<Colaborar />} />
        <Route path="/button" element={<Button />} />
        <Route path="/loguin" element={<Loguin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
