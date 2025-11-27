// Seleccionamos el <tbody> de la tabla y lo guardamos en la variable 'tabla'
// Esto nos permite escuchar los clics en cualquier fila de la tabla
const tabla = document.querySelector('table tbody');

// Variable para almacenar la fila que está actualmente seleccionada
// Inicialmente no hay ninguna fila seleccionada, por eso es null
let filaSeleccionada = null;

// Añadimos un "listener" para el evento 'click' en la tabla
// Cada vez que se haga clic en cualquier celda de la tabla, se ejecutará esta función
tabla.addEventListener('click', function(event) {
  
  // Obtenemos la fila (<tr>) que contiene la celda clicada
  // event.target es el elemento exacto donde hicimos click (un <td>)
  // parentElement sube un nivel en el DOM para obtener el <tr> que lo contiene
  const fila = event.target.parentElement; 

  // Si ya hay una fila seleccionada previamente, le quitamos la clase 'seleccionada'
  // Esto asegura que solo una fila se marque a la vez
  if (filaSeleccionada) {
    filaSeleccionada.classList.remove('seleccionada');
  }

  // Añadimos la clase 'seleccionada' a la fila clicada
  // Esto cambia el fondo de la fila (según el CSS definido)
  fila.classList.add('seleccionada');

  // Actualizamos la variable 'filaSeleccionada' con la fila que acabamos de marcar
  // Así sabemos cuál fila desmarcar la próxima vez que se haga click
  filaSeleccionada = fila;
});

