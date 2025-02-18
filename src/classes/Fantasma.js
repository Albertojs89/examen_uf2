// Define la clase Fantasma
export default class Fantasma {
  constructor(filas, columnas) {
    this.x = 0; 
    this.y = 0; 
    this.estado = "vivo"; // estado Inicial
    this.generaPosicionAleatoria(filas, columnas); 
  }

  // Método para generar una posición aleatoria
  generaPosicionAleatoria(filas, columnas) {
    this.x = Math.floor(Math.random() * columnas); 
    this.y = Math.floor(Math.random() * filas); 
  }
}
