
let salida = document.getElementById("salida");

document.addEventListener("mousedown", function(evento){

    if(evento.button == 0){
        salida.textContent = "Has pulsado el de la izquierda";
    } else if(evento.button == 1){
        salida.textContent = "Has pulsado el del medio";
    } else{
        salida.textContent = "Has pulsado el de la derecha";       
    }

})

document.addEventListener("contextmenu", function(evento){
    evento.preventDefault();
})