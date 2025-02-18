import { useState } from "react";
import Cuadricula from "../components/Cuadricula";
import "../styles/juego.css"; // Importamos los estilos

function Juego() {
  const [puntos, setPuntos] = useState(0); // Estado para el contador de puntos

  return (
    <div className="juego-container">
      <div>
        <h1>Comecocos - Juego</h1>
        {/* Contador de puntos */}
        <div className="contador-puntos">
          <h2>Puntos: {puntos}</h2>
        </div>
        <Cuadricula />
      </div>
    </div>
  );
}

export default Juego;
