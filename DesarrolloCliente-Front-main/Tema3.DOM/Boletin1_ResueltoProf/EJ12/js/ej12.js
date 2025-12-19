document.addEventListener("DOMContentLoaded", function () { // Espera a que el HTML esté cargado
  document.getElementById("btnBorrar").onclick = borrarSeleccionados; // Botón para borrar imágenes seleccionadas
  document.getElementById("btnAplicar").onclick = aplicarSeleccion; // Botón para mover/clonar imágenes

  let imagenes = document.getElementsByTagName("img"); // Colección de todas las imágenes <img>
  for (let i = 0; i < imagenes.length; i++)
    imagenes[i].onclick = function () { // Asigna función a cada imagen
      permutarSeleccion(this); // this es la imagen pulsada
    };
});

function borrarSeleccionados() {
  const seleccionados = document.getElementsByClassName("seleccionado"); // HTMLCollection de elementos con esa clase
  for (let i = seleccionados.length - 1; i >= 0; i--) { // Bucle al revés porque la colección se actualiza al borrar
    seleccionados[i].remove(); // remove() elimina el nodo del DOM
  }
}

function permutarSeleccion(img) { // img es la imagen clicada
  if (img.classList.contains("seleccionado")) { // classList permite comprobar clases del elemento
    img.classList.remove("seleccionado"); // Quita la clase
  } else {
    img.classList.add("seleccionado"); // Añade la clase
  }
}

function aplicarSeleccion() {
  const destino = document.querySelector("[name='zona-destino']:checked").value; // Obtiene el radio seleccionado (sitio)
  const lugar = document.querySelector("[name='lugar']:checked").value; // Radio para posición (first/last)
  const clonar = document.querySelector("[name='clonar']").checked; // Checkbox: true si hay que clonar
  const contenedorDestino = document.getElementById(destino); // Div/capa donde van las imágenes
  const seleccionados = document.querySelectorAll(".seleccionado"); // NodeList estática con las imágenes marcadas
  let nodo;

  for (let i = 0; i < seleccionados.length; i++) {
    if (clonar) {
      nodo = seleccionados[i].cloneNode(); // cloneNode() copia el elemento sin hijos
      nodo.onclick = function () { permutarSeleccion(this); }; // Se vuelve a asignar su evento
    } else {
      nodo = seleccionados[i]; // Se mueve directamente el original
    }

    if (lugar == "first" && contenedorDestino.children.length > 1) {
      // insertBefore inserta el nodo antes del hijo indicado (children es colección viva de nodos hijos)
      contenedorDestino.insertBefore(nodo, contenedorDestino.children[i + 1]);
    } else {
      contenedorDestino.append(nodo); // append añade el nodo al final
    }

    quitarSeleccion(); // Después de cada movimiento se limpia la selección visual
  }
}

function quitarSeleccion() {
  let seleccionados = document.querySelectorAll(".seleccionado"); // NodeList de imágenes aún seleccionadas
  for (let i = 0; i < seleccionados.length; i++) {
    seleccionados[i].classList.remove("seleccionado"); // Elimina la clase de selección
  }
}
