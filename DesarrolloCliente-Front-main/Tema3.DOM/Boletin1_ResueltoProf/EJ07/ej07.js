// Seleccionamos el tbody de la tabla
const tabla = document.querySelector('table tbody');

tabla.addEventListener('click', function(event) {
  // Obtenemos la fila (tr) clicada
  const fila = event.target.parentElement;

  // Verificamos que sea realmente un tr
  if (fila.nodeName !== 'TR') return;

  // Obtenemos la fila anterior (hermano anterior)
  const filaAnterior = fila.previousElementSibling;

  // Si hay una fila anterior, la insertamos antes de ella
  if (filaAnterior) {
    // insertBefore mueve el nodo fila antes de filaAnterior
    tabla.insertBefore(fila, filaAnterior);
  }
});
