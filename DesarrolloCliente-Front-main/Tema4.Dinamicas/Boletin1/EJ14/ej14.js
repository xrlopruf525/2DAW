// Referencia al botón
const btnAddJSON = document.getElementById("addJSON");

// Asociamos el evento click al botón
btnAddJSON.addEventListener("click", atacarAPI);

// Función que ataca la API Rest
async function atacarAPI() {
  // Obtenemos la URL de la API desde el formulario
  const url = document.forms["formulario"].url.value;

  try {
    // Realizamos la petición a la API usando Fetch
    const respuesta = await fetch(url);

    // Comprobamos si la respuesta es correcta
    if (!respuesta.ok) {
      throw new Error("Error en la petición a la API");
    }

    // Convertimos la respuesta a objeto JavaScript (JSON)
    const datos = await respuesta.json();

    // Mostramos los objetos leídos por consola
    console.log("Datos obtenidos de la API:");
    console.log(datos);

    // Si queremos ver solo los usuarios (en esta API concreta)
    console.log("Usuarios:");
    console.log(datos.results);
  } catch (error) {
    // Mostramos el error en consola
    console.error("Se produjo un error:", error);
  }
}