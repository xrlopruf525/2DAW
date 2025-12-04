document.getElementById("boton").onclick = insertarTarea; // Asigna la función insertarTarea al evento click del botón

function insertarTarea() { // Esta función se ejecuta al pulsar el botón
  const tarea = document.getElementsByName("tarea")[0].value; // Obtiene el valor del input con name="tarea"
  const prioridad = document.getElementsByName("prioridad")[0].value; // Obtiene el valor del input con name="prioridad"
  const tbody = document.getElementById("tbody"); // tbody es la sección del <table> donde se añaden filas dinámicamente
  let imp, tr, td, boton;

  switch (prioridad) { // Convierte texto de prioridad a un número para ordenar
    case "Muy alta": imp = 1; break;
    case "Alta": imp = 2; break;
    case "Media": imp = 3; break;
    case "Baja": imp = 4; break;
    case "Muy baja": imp = 5; break;
  }

  tr = document.createElement("tr"); // Crea una nueva fila <tr>
  tr.classList.add("imp" + imp); // Guarda la prioridad como clase (ej: "imp3")

  td = document.createElement("td"); // Primera celda (numeración)
  tr.appendChild(td); // appendChild mete el elemento como último hijo de la fila

  td = document.createElement("td"); // Segunda celda (texto de tarea)
  td.textContent = tarea; // textContent pone el contenido visible
  tr.appendChild(td);

  td = document.createElement("td"); // Tercera celda (prioridad)
  td.textContent = prioridad;
  tr.appendChild(td);

  td = document.createElement("td"); // Cuarta celda (botón eliminar)
  boton = document.createElement("button"); // Crea el botón
  td.appendChild(boton);
  boton.classList.add("fa"); // Añade clases CSS
  boton.classList.add("fa-trash");
  boton.onclick = function () { eliminaFila(this); }; // this es el botón que se pulsó
  tr.appendChild(td);

  insertarOrdenado(tbody, tr, imp); // Inserta la fila según prioridad (el tbody y la fila se pasan como parámetros)
  renumerarTabla(); // Actualiza números en la primera columna
}

function eliminaFila(boton) { // Recibe el botón sobre el que se hizo clic
  boton.parentNode.parentNode.remove(); // parentNode sube un nivel (td), otro nivel (tr) y remove elimina la fila entera
  renumerarTabla(); // Renumera tras borrar
}

function renumerarTabla() {
  const filas = document.getElementById("tbody").children; // children devuelve una colección HTML con todas las filas hijas
  for (let i = 0; i < filas.length; i++) {
    filas[i].firstChild.textContent = (i + 1) + "."; // firstChild es la primera celda <td> de la fila
  }
}

function insertarOrdenado(tbody, tr, imp) { // Recibe el tbody, la fila creada y la prioridad numérica
  const clase = "imp" + imp; // Clase de prioridad que se usará como referencia
  const filas = tbody.children; // children = todas las <tr> actuales dentro del tbody

  if (filas == 0) { // Si no hay filas
    tbody.appendChild(tr); // Primera inserción
  } else {
    let i = 0;
    while (i < filas.length && filas[i].className <= clase) { i++; } // Busca la posición comparando className
    if (i == filas.length) {
      tbody.appendChild(tr); // Si es la mayor prioridad numérica, va al final
    } else {
      tbody.insertBefore(tr, filas[i]); // insertBefore coloca la fila antes de la fila existente en esa posición
    }
  }
}