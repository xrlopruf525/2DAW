// Referencias al botón y a la capa de salida
const btnAddTexto = document.getElementById("addTexto");
const capa = document.getElementById("capa");

// Asociamos la función al botón
btnAddTexto.addEventListener("click", agregarFichero);

// Función asincrónica para leer y añadir el fichero
async function agregarFichero() {
  // Obtenemos el nombre del fichero del input del formulario
  const nombreFichero = document.forms["formulario"].nombreFichero.value.trim();

  // Comprobamos que no esté vacío
  if (!nombreFichero) {
    alert("Introduce un nombre de fichero");
    return;
  }

  try {
    // Fetch para leer el fichero de texto
    const respuesta = await fetch(nombreFichero);

    // Comprobamos que la respuesta sea correcta
    if (!respuesta.ok) {
      throw new Error(`No se pudo leer el fichero: ${respuesta.status} ${respuesta.statusText}`);
    }

    // Obtenemos el contenido como texto
    const texto = await respuesta.text();

    // Añadimos el contenido a la capa sin borrar lo que ya había
    capa.innerHTML += `<p>${texto}</p>`;
  } catch (error) {
    // Mostramos cualquier error que ocurra
    capa.innerHTML += `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
