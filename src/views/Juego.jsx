import { useState } from "react";
import Cuadricula from "../components/Cuadricula";
import "../styles/juego.css"; // Importamos los estilos

function Juego() {
  const [puntos, setPuntos] = useState(0); // Estado para el contador de puntos

  // Función para incrementar los puntos cuando el Comecocos come un fantasma
  const aumentarPuntos = () => {
    setPuntos((prevPuntos) => prevPuntos + 1);
  };
/*
aumentar puntos con AYUDA de IA al final utiliza casi el mismo contador por defecto
de la pagina de React Vite y lo utiliza como prop en la funcion aumentar puntos.

*/
  return (
    <div className="juego-container">
      <div>
        <h1>Comecocos - Juego</h1>
        {/* Contador de puntos */}
        <div className="contador-puntos">
          <h2>Puntos: {puntos}</h2>
        </div>
        {/* Pasamos la función aumentarPuntos a Cuadricula */}
        <Cuadricula aumentarPuntos={aumentarPuntos} />
      </div>
    </div>
  );
}

export default Juego;
