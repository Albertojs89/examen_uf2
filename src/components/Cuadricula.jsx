import React, { useState } from "react";
import Fantasma from "../classes/Fantasma"; // Ahora importamos desde la nueva carpeta
import "../styles/juego.css"; // Importamos los estilos

const filas = 20;
const columnas = 20;

// Posición inicial del Comecocos (centro de la cuadrícula)
const posicionInicial = {
  x: Math.floor(columnas / 2),
  y: Math.floor(filas / 2),
};

function Cuadricula() {
  const [posicionComecocos, setPosicionComecocos] = useState(posicionInicial);

  // Generamos 5 fantasmas con posiciones aleatorias
  const [fantasmas, setFantasmas] = useState(() => {
    return Array.from({ length: 5 }, () => new Fantasma(filas, columnas));
  });

  return (
    <div className="cuadricula container">
      {[...Array(filas)].map((_, filaIndex) =>
        [...Array(columnas)].map((_, colIndex) => {
          let claseCelda = "celda";

          // Verificamos si la celda actual es la del Comecocos
          if (
            filaIndex === posicionComecocos.y &&
            colIndex === posicionComecocos.x
          ) {
            claseCelda += " comecocos";
          }

          // Verificamos si la celda actual es de un fantasma
          if (
            fantasmas.some(
              (fantasma) => fantasma.x === colIndex && fantasma.y === filaIndex
            )
          ) {
            claseCelda += " fantasma";
          }

          return (
            <div key={`${filaIndex}-${colIndex}`} className={claseCelda}></div>
          );
        })
      )}
    </div>
    
  );
}


export default Cuadricula;
