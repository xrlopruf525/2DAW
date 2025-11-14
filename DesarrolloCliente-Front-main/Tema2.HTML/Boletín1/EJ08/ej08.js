let entrada = document.getElementById("txtEntrada");

entrada.addEventListener("keydown", function(evento){
    if(evento.key >=0 && evento.key <=9){
        evento.preventDefault();
        alert("No puedes introducir dígitos")
    }
})