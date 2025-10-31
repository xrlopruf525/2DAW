let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null;

let pantallaTiempo = document.getElementById('tiempo');

function iniciar() {
    if (!intervalo) {
        intervalo = setInterval("contar()", 100);
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    clearInterval(intervalo);
    intervalo = null;
    horas = 0; minutos = 0; segundos = 0;
    pantallaTiempo.textContent = "00:00:00";
}

function contar() {
    segundos++;
    if (segundos === 60) { segundos = 0; minutos++; }
    if (minutos === 60) { minutos = 0; horas++; }
    pantallaTiempo.textContent =
        (horas) + ":" +
        (minutos) + ":" +
        (segundos);
}