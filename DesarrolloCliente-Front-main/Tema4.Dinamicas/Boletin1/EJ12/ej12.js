// Obtenemos referencias al botón y al párrafo de salida
const btnIniciar = document.getElementById("iniciaPromesa");
const salida = document.getElementById("salida");

// Función que crea la promesa que se resuelve en 2 segundos
function crearPromesa() {
  const mensaje = document.getElementById("msjExito").value;
  return new Promise((resolve) => {
    setTimeout(() => {resolve(mensaje);}, 2000);
  });
}

// Función asincrónica que inicia la promesa y espera su resultado
async function iniciaPromesa() {
  salida.textContent = "Esperando 2 segundos..."; // Mensaje provisional

  // "await" hace que el código espere a que la promesa se resuelva
  const resultado = await crearPromesa();

  // Una vez resuelta, mostramos el mensaje en el párrafo
  salida.textContent = resultado;
}

// Asociamos la función al botón
btnIniciar.addEventListener("click", iniciaPromesa);
