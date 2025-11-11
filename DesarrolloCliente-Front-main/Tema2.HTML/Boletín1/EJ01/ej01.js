
 document.getElementById('consultar').onclick = function(){
     const seleccionado=document.querySelector('input[name="actores"]:checked');
     console.log(seleccionado.value);
 }

formulario.consultar.addEventListener('click', mostrarDatos);

function mostrarDatos(){
    console.log(formulario.actores.value);
}

