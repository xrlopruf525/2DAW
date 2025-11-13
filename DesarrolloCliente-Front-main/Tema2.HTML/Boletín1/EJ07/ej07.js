let teclado = document.getElementById("teclado");
let salida = document.getElementById("salida");

teclado.addEventListener("click", mostrarSalida);

function mostrarSalida(event) {
  if (event.target.tagName === "INPUT") {
    salida.value += event.target.value;
  }



  
}