import React, { useState } from "react";
import "../styles/juego.css"; // Importamos los estilos


//num de filas y col...
const filas = 20;
const columnas = 20;

// Posición inicial del Comecocos CENTRO!
const posicionInicial = {
  x: Math.floor(columnas / 2),
  y: Math.floor(filas / 2),
};

function Cuadricula() {
  const [posicionComecocos, setPosicionComecocos] = useState(posicionInicial);

  return (
    <div className="cuadricula container">
      {[...Array(filas)].map((_, filaIndex) =>
        [...Array(columnas)].map((_, colIndex) => {
          const esComecocos =
            filaIndex === posicionComecocos.y &&
            colIndex === posicionComecocos.x;

          return (
            <div
              key={`${filaIndex}-${colIndex}`}
              className={`celda ${esComecocos ? "comecocos" : ""}`}
            ></div>
          );
        })
      )}
    </div>
  );
}

export default Cuadricula;
