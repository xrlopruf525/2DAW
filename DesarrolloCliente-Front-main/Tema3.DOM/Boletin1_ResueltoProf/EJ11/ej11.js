document.getElementById("btnCrearTablas").addEventListener("click", crearTablas); // Cuando se pulsa, crea las tablas
document.getElementById("btnBorrarTablas").addEventListener("click", borrarTablas); // Borra las tablas creadas

const alumnos = document.querySelectorAll("ul > li > ul > li"); // Selecciona todos los <li> alumnos de la lista original
for (let alumno of alumnos) {
  alumno.addEventListener("click", procesarAlumno); // Al hacer clic en un alumno se procesa
}

function procesarAlumno(event) { // event.target es el <li> que se clicó
  const destino = document.querySelector("input:checked").value; // Obtiene el valor del radio seleccionado
  const ubicacion = document.getElementById("combo").value; // Obtiene "primero" o "ultimo"
  let listaDestino;

  if (destino == "aprob") listaDestino = document.getElementById("aprobados"); // Lista destino aprobados
  else if (destino == "recup") listaDestino = document.getElementById("recuperacion"); // Lista destino recuperación
  else if (destino == "repet") listaDestino = document.getElementById("repetir"); // Lista destino repetir

  if (ubicacion == "primero") {
    listaDestino.prepend(event.target); // prepend mete el alumno como primer hijo de la lista
  } else if (ubicacion == "ultimo") {
    listaDestino.append(event.target); // append lo añade al final de la lista
  }
}

function crearTablas() {
  borrarTablas(); // Limpia las tablas antes de crear nuevas

  const listaAprobados = document.getElementById("aprobados").children; // children = colección viva de <li> hijos
  const listaRecuperacion = document.getElementById("recuperacion").children;
  const listaRepeticion = document.getElementById("repetir").children;
  const capaTablas = document.getElementById("tablas"); // Contenedor donde se colocarán las tablas

  capaTablas.append(generarTabla(listaAprobados)); // append añade la tabla al contenedor
  capaTablas.append(generarTabla(listaRecuperacion));
  capaTablas.append(generarTabla(listaRepeticion));
}

function generarTabla(lista) { // lista es una colección de <li> (los alumnos)
  const tabla = document.createElement("table"); // Crea una tabla nueva
  tabla.setAttribute("border", "1"); // Añade borde
  tabla.style.marginBottom = "10px"; // Espacio inferior entre tablas

  for (let alumno of lista) { // Recorre cada <li> de la lista
    let fila = tabla.insertRow(); // insertRow() crea un <tr> al final de la tabla
    fila.insertCell().append(document.createTextNode(alumno.textContent)); // insertCell() crea <td> y append mete el nombre
  }

  return tabla; // Devuelve la tabla ya montada
}

function borrarTablas() {
  document.getElementById("tablas").innerHTML = ""; // innerHTML="" elimina todo su contenido
}
