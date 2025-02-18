import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Juego from "./views/Juego";
import Instrucciones from "./views/Instrucciones";

function App() {
  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        <nav>
          <ul>
            <li>
              <Link to="/">Juego</Link>
            </li>
            <li>
              <Link to="/instrucciones">Instrucciones</Link>
            </li>
          </ul>
        </nav>

        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Juego />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
