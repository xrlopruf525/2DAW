// Funcionalidad de reinicio
document
  .getElementById("btnRestaurar")
  .addEventListener("click", () => location.reload());

document.getElementById("btnMover").onclick = aplicarSeleccion;

function aplicarSeleccion() {


  const checks = document.querySelectorAll(".check-prod:checked");

  const destinoId = document.querySelector("[name='destino']:checked").value;
  const estanteria = document.getElementById(destinoId);
  const contenido = estanteria.querySelector(".contenido-estante");

  const metodo = document.querySelector("[name='metodo']:checked").value;

  const clonar = document.querySelector("[name='clonar']:checked").value;

  checks.forEach(check => {

    const producto = check.parentNode; 
    let nodo;

    if (clonar === "si") {
      nodo = producto.cloneNode(true); 
      nodo.querySelector(".check-prod").checked = false;
    } else {
      nodo = producto; 
    }

    switch (metodo) {
      case "append":
        contenido.append(nodo); 
        break;

      case "prepend":
        contenido.prepend(nodo);
        break;

      case "before":
        estanteria.before(nodo); 
        break;

      case "after":
        estanteria.after(nodo); 
        break;
    }

    if (clonar === "no") {
      check.checked = false;
    }
  });
}