export default class Fantasma {
  constructor(filas, columnas) {
    this.x = 0;
    this.y = 0;
    this.estado = "vivo"; // Estado inicial del fantasma (vivo)
    this.generaPosicionAleatoria(filas, columnas);
  }

  // Genera una posición aleatoria dentro de los límites de la cuadrícula
  generaPosicionAleatoria(filas, columnas) {
    this.x = Math.floor(Math.random() * columnas);
    this.y = Math.floor(Math.random() * filas);
  }

  // Método para cambiar el estado del fantasma a "muerto"
  morir() {
    this.estado = "muerto";
  }
}
