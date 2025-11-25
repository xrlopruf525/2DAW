
const boton = document.getElementById("boton");
const contenedor = document.getElementById("tabla");
const formulario = document.forms["formulario"];

boton.addEventListener("click", () => {
  const filas = Number(formulario.filas.value);
  const columnas = Number(formulario.columnas.value);

  if (!filas || !columnas || filas < 1 || columnas < 1) {
    alert("Introduce un número válido de filas y columnas.");
    return;
  }

  contenedor.innerHTML = "";

  const tabla = document.createElement("table");

  for (let f = 1; f <= filas; f++) {
    const fila = document.createElement("tr");

    for (let c = 1; c <= columnas; c++) {
      const celda = document.createElement("td");
      celda.textContent = `${c}:${f}`; 
      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

  contenedor.appendChild(tabla);
});
