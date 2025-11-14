let entrada = document.getElementById("txtEntrada");

entrada.addEventListener("copy", function(evento) {
    evento.preventDefault();
    alert("No puedes copiar texto");
});
