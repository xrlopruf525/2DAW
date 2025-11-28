// Asigna la función "crearTabla" al evento click del botón con id="boton"
document.getElementById("boton").onclick = crearTabla; 

// Función que crea una tabla dinámicamente
function crearTabla() {
  // Obtiene el número de filas desde el formulario
  const filas = formulario.filas.value;
  
  // Obtiene el número de columnas desde el formulario
  const columnas = formulario.columnas.value;

  // Crea el elemento <table>
  let tabla = document.createElement("table");

  // Contador que servirá para numerar las celdas
  let contador = 1;

  // Bucle para crear las filas de la tabla
  for (let i = 0; i < filas; i++) {
    // Inserta una nueva fila en la tabla
    let fila = tabla.insertRow();

    // Bucle para crear las celdas (columnas) dentro de cada fila
    for (let j = 0; j < columnas; j++) {
      // Inserta una nueva celda en la fila actual
      let celda = fila.insertCell();

      // Crea un nodo de texto con el número actual del contador
      let textoCelda = document.createTextNode(contador);

      // Añade el texto dentro de la celda
      celda.append(textoCelda);

      // Incrementa el contador para la siguiente celda
      contador++;
    }
  }

  // Inserta la tabla generada dentro del elemento con id="tabla"
  document.getElementById("tabla").append(tabla);
}
