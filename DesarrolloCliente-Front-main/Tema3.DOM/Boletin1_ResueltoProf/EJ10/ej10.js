const tareaInput = document.querySelector('input[name="tarea"]');
const prioridadSelect = document.querySelector('select[name="prioridad"]');
const boton = document.getElementById('boton');
const tbody = document.getElementById('tbody');

let tareas = [];

const prioridad = {
  "Muy alta": 1,
  "Alta": 2,
  "Media": 3,
  "Baja": 4,
  "Muy baja": 5,
};

boton.onclick = () => {
  if (tareaInput.value === "") return;

  tareas.push({
    texto: tareaInput.value,
    prioridad: prioridadSelect.value
  });

  tareaInput.value = "";
  render();
};

function render() {
  tareas.sort((a, b) => prioridad[a.prioridad] - prioridad[b.prioridad]);
  tbody.innerHTML = "";

  tareas.forEach((t, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${t.texto}</td>
        <td>${t.prioridad}</td>
        <td><i class="fa fa-trash" style="cursor:pointer" onclick="borrar(${i})"></i></td>
      </tr>
    `;
  });
}

function borrar(i) {
  tareas.splice(i, 1);
  render();
}
