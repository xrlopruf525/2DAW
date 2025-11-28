// Asigna la función "crearTablero" al evento click del botón con id="boton"
document.getElementById("boton").addEventListener("click", crearTablero);

// Función que crea un tablero de ajedrez 8x8 con coordenadas
function crearTablero() {
  const filas = 8; // Número de filas del tablero
  const columnas = 8; // Número de columnas del tablero
  let celdaNegra = false; // Bandera para alternar celdas negras y blancas

  // Crea el elemento <table> que contendrá el tablero
  let tabla = document.createElement("table");

  let idFila = 8; // Contador de filas para las coordenadas (8 a 1)
  
  // Bucle para crear las filas
  for (let i = 0; i < filas; i++) {
    let fila = tabla.insertRow(); // Inserta una nueva fila en la tabla
    let idColumna = 65; // Código ASCII de 'A', para las columnas A-H

    // Bucle para crear las celdas dentro de cada fila
    for (let j = 0; j < columnas; j++) {
      let celda = fila.insertCell(); // Inserta una nueva celda

      // Crea el texto de la celda usando la letra de columna + número de fila
      let textoCelda = document.createTextNode(
        String.fromCharCode(idColumna) + idFila
      );
      celda.append(textoCelda); // Añade el texto a la celda
      idColumna += 1; // Avanza a la siguiente letra de columna

      // Si la bandera celdaNegra es true, pinta la celda de negro y texto blanco
      if (celdaNegra) {
        celda.style.backgroundColor = "black";
        celda.style.color = "white";
      }

      celdaNegra = !celdaNegra; // Alterna el color para la siguiente celda
    }

    idFila -= 1; // Baja al siguiente número de fila
    celdaNegra = !celdaNegra; // Alterna la celda inicial de la siguiente fila para mantener el patrón de ajedrez
  }

  // Inserta la tabla generada dentro del elemento con id="tablero"
  document.getElementById("tablero").append(tabla);
}
