import React, { useState, useEffect } from "react";
import Fantasma from "../classes/Fantasma"; // Importamos la clase Fantasma
import "../styles/juego.css"; // Importamos los estilos

const filas = 20;
const columnas = 20;

// Posición inicial del Comecocos CENTRO!
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

  // EVITAR QUE SALGA DE LA PANTALLA
  const moverComecocos = (evento) => {
    setPosicionComecocos((posicionActual) => {
      let nuevaPosicion = { ...posicionActual };

      if (evento.key === "ArrowUp" && nuevaPosicion.y > 0) {
        console.log("Arriba");
        nuevaPosicion.y -= 1;
      } else if (evento.key === "ArrowDown" && nuevaPosicion.y < filas - 1) {
        console.log("Abajo");
        nuevaPosicion.y += 1;
      } else if (evento.key === "ArrowLeft" && nuevaPosicion.x > 0) {
        console.log("Izquierda");
        nuevaPosicion.x -= 1;
      } else if (evento.key === "ArrowRight" && nuevaPosicion.x < columnas - 1) {
        console.log("Derecha");
        nuevaPosicion.x += 1;
      }

      return nuevaPosicion;
    });
  };

  // useEffect para escuchar las teclas de flecha -------------------
  useEffect(() => {
    window.addEventListener("keydown", moverComecocos);
    return () => {
      window.removeEventListener("keydown", moverComecocos);
    };
  }, []);

  return (
    <div className="cuadricula">
      {[...Array(filas)].map((_, filaIndex) =>
        [...Array(columnas)].map((_, colIndex) => {
          let claseCelda = "celda";

          // Verificamos si la celda actual es la del Comecocos
          if (filaIndex === posicionComecocos.y && colIndex === posicionComecocos.x) {
            claseCelda += " comecocos";
          }

          // Verificamos si la celda actual es de un fantasma
          if (fantasmas.some((fantasma) => fantasma.x === colIndex && fantasma.y === filaIndex)) {
            claseCelda += " fantasma";
          }

          return <div key={`${filaIndex}-${colIndex}`} className={claseCelda}></div>;
        })
      )}
    </div>
  );
}


/*
PASOS------
generamos una cuadricula de celdas
asignamos css para indicar posicion del COMECOSO y los fantasmas
usestate--> manejamos las posiciones y visualiza las celdas 

*/
export default Cuadricula;
