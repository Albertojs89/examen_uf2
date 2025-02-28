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

function Cuadricula({ aumentarPuntos }) {
  const [posicionComecocos, setPosicionComecocos] = useState(posicionInicial);

  // Generamos 5 fantasmas con posiciones aleatorias--------------------------
  const [fantasmas, setFantasmas] = useState(() => {
    let listaFantasmas = [];
    for (let i = 0; i < 5; i++) {
      let nuevoFantasma = new Fantasma(filas, columnas);
      listaFantasmas.push(nuevoFantasma);
    }
    return listaFantasmas;
  });

  // useEffect para detectar si el Comecocos ha comido un fantasma
  useEffect(() => {
    let nuevosFantasmas = [...fantasmas]; // Copia del array de fantasmas

    // Recorremos fantasmas
    for (let i = 0; i < nuevosFantasmas.length; i++) {
      let fantasma = nuevosFantasmas[i];

      // CONDICION DE MATAR FANTASMA Y AUMENTAR PUNTOS-----
      if (
        fantasma.x === posicionComecocos.x &&
        fantasma.y === posicionComecocos.y
      ) {
        fantasma.morir(); // pasa a muerto---------------<
        aumentarPuntos(); // sumar los puntos
      }
    }

    // utilizar filter para filtrar y comprobar vivos
    setFantasmas(
      nuevosFantasmas.filter((fantasma) => fantasma.estado === "vivo")
    );
  }, [posicionComecocos]);

  // Comprobar si hay fantasmas vivos para GANAR!
  const hayFantasmasVivos = fantasmas.length > 0;
  if (!hayFantasmasVivos) {
    document.body.innerHTML += "<p>HAS GANADO</p>";
    return;
  }

  //----------------------------------------------------------------

  // EVITAR QUE SALGA DE LA PANTALLA Y MOVIMIENTO---------
  /*
  verificar limites:
 arriba (ArrowUp) →  y > 0
 abajo (ArrowDown) →  y < filas - 1
 izquierda (ArrowLeft) →  x > 0
 derecha (ArrowRight) →  x < columnas - 1
 ----------------------------------------------------------
  */
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
      } else if (
        evento.key === "ArrowRight" &&
        nuevaPosicion.x < columnas - 1
      ) {
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
    // PINTAR TABLA DEL JUEGO----------------------------------
    <div className="cuadricula">
      {/* __ como variable indica que esta no será utilizada */}
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

          // Recorremos FANTASMAS-------------
          for (let i = 0; i < fantasmas.length; i++) {
            let fantasma = fantasmas[i];
            if (
              fantasma.x === colIndex &&
              fantasma.y === filaIndex &&
              fantasma.estado === "vivo"
            ) {
              claseCelda += " fantasma";
              break;
            }
          }

          return (
            <div key={`${filaIndex}-${colIndex}`} className={claseCelda}></div>
          );
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
detectamos cuando el COMECOSO come un fantasma y lo eliminamos sin usar .some()
cambiamos el estado del fantasma a "muerto" en lugar de eliminarlo directamente
sumamos puntos cuando el COMECOSO come un fantasma
*/
export default Cuadricula;
