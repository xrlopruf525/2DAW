const boton = document.getElementById("boton");
const contenedor = document.getElementById("tablero");

boton.addEventListener("click", () => {
  contenedor.innerHTML = "";

  const tabla = document.createElement("table");

  const filas = 8;
  const columnas = 8;

  for (let f = 1; f <= filas; f++) {
    const fila = document.createElement("tr");

    for (let c = 1; c <= columnas; c++) {
      const celda = document.createElement("td");

      celda.textContent = `${c}:${f}`;

      if ((f + c) % 2 === 0) {
        celda.style.backgroundColor = "white";
      } else {
        celda.style.backgroundColor = "black";
        celda.style.color = "white";
      }

      celda.style.width = "40px";
      celda.style.height = "40px";

      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

  contenedor.appendChild(tabla);
});

