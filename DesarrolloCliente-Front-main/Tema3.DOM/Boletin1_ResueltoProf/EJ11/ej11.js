document.addEventListener("DOMContentLoaded", () => {
const combo = document.getElementById("combo");
const btnCrearTablas = document.getElementById("btnCrearTablas");
const btnBorrarTablas = document.getElementById("btnBorrarTablas");
const contenedorTablas = document.getElementById("tablas");


// Mover alumno al hacer click
document.querySelectorAll("#aprobados li, #recuperacion li, #repetir li").forEach(alumno => {
    alumno.addEventListener("click", () => {
        const tipo = document.querySelector('input[name="tipo"]:checked').value;
        const listaDestino = document.getElementById(
            tipo === "aprob" ? "aprobados" : tipo === "recup" ? "recuperacion" : "repetir"
        );
        if (combo.value === "primero") {
            listaDestino.insertBefore(alumno, listaDestino.firstChild);
        } else {
            listaDestino.appendChild(alumno);
        }
    });
});

// Crear tablas
btnCrearTablas.addEventListener("click", () => {
    contenedorTablas.innerHTML = "";
    ["aprobados", "recuperacion", "repetir"].forEach(idLista => {
        const lista = document.getElementById(idLista);
        const tabla = document.createElement("table");
        tabla.border = "1";
        Array.from(lista.children).forEach(li => {
            const fila = tabla.insertRow();
            fila.insertCell().textContent = li.textContent;
        });
        contenedorTablas.appendChild(tabla);
    });
});

// Borrar tablas
btnBorrarTablas.addEventListener("click", () => {
    contenedorTablas.innerHTML = "";
});


});
