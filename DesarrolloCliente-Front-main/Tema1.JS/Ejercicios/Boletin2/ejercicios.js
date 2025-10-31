function ejercicio1(){
    let nombre=prompt("Introduce el nombre y apellidos: ");


    let totalcar=nombre.replace(/\s/g, '').length;  //Replace remplaza lo primero por lo 2, busca los espacios en blanco y lo cambia por nada
    let partes = nombre.split(" "); //Divide por espacios
    let nom=partes[0].toLowerCase();
    let ape1=partes[1].toLowerCase();
    let ape2=partes[2].toLowerCase();
    let usuario=nom[0]+ ape1.slice(0,3)+ape2.slice(0,3); //Coge la pos 0 de nom, slice crea un nuevo string de 3 posiciones

    document.getElementById("ejer1").innerHTML=("Hay un total de: "+totalcar+" caracteres <br>"+
        "Mensaje en mayuscula: "+nombre.toLocaleUpperCase()+
        " Mensaje en minusucula: "+nombre.toLocaleLowerCase()+"<br>"+
        "Nombre separado: <br>"+nombre.split(" ").join("<br>")+"<br>"+ //Separa por espacio y lo une con saltos de linea
        "Tu usuario es: "+usuario
    );
}

function ejercicio2(){
    let contraseña=prompt("Introduzca una contraseña: ");

    let salida="";

    if (contraseña.length < 8 || contraseña.length > 16) {
        salida += "No cumple con la longitud necesaria. Debe estar entre 8 y 16 caracteres.<br>";
    }

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;

    const especiales = "-_@#$%&ç"; 

    for (let i = 0; i < contraseña.length; i++) { //Recorrer contraseña
        let c = contraseña[i]; //Recorrer caracter
        if (c >= "A" && c <= "Z") {
            tieneMayuscula = true;
        } else if (c >= "a" && c <= "z") {
            tieneMinuscula = true;
        } else if (c >= "0" && c <= "9") {
            tieneDigito = true;
        } else if (especiales.includes(c)) { //Busca en los caracter si esta los especiales
            tieneEspecial = true;
        }
    }

    if (!tieneMayuscula) {
        salida += "La contraseña debe tener al menos una letra mayúscula.<br>";
    }

    if (!tieneMinuscula) {
        salida += "La contraseña debe tener al menos una letra minúscula.<br>";
    }

    if (!tieneDigito) {
        salida += "La contraseña debe tener al menos un dígito.<br>";
    }

    if (!tieneEspecial) {
        salida += "La contraseña debe tener al menos un carácter especial: - _ @ # $ % & ç<br>";
    }

    if (salida === "") {
        salida = "¡Contraseña válida!";
    }

    document.getElementById("ejer2").innerHTML = salida;
}

function ejercicio3(){
    let frase=prompt("Introduce la frase: ");
    let pal=frase.split(" "); //Separar por espacios
        document.getElementById("ejer3").innerHTML = "Ha introducido un total de "+pal.length+" palabras"; //contar las palabras
}

function ejercicio4(){

    let frase=prompt("Introduce la frase: ");
    frase = frase.replace(/[A-Z]/g, letra => `<b>${letra}</b>`); //F flecha, cambia las de mayuscula por la letra en negrita
    document.getElementById("ejer4").innerHTML=frase;
}

 function ejercicio6(){

    let frase=prompt("Introduce la frase: ");
    frase = frase.replace(/[A-Za-z]/g, letra =>{ //Remplaza la mayuscula por minusucla dependiendo lo q encuentre en el if
        if(letra==letra.toLowerCase()){
            return letra.toUpperCase();
        } else{
            return letra.toLowerCase();
        }
    });
    document.getElementById("ejer6").innerHTML=frase;
} 

function ejercicio7(){

    let datos=prompt("Introduce los datos: ");

    datos=datos.split(":");

    let nom=datos[0];
    let ape=datos[1];
    let tlf=datos[2];
    let email=datos[3];
    let cod=datos[4];

    let ser=email.split("@")[0];

      document.getElementById("ejer7").innerHTML=("Cod Postal: "+cod+ "<br>"+
       "Ape: "+ape+ "<br>"+
       "email: "+ser+"<br>"
    );

}

function ejercicio8(){
    let salida = "";

function mostrarFecha() {
    const fecha = new Date();
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                   "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();
    salida += `Fecha actual: ${dia} de ${mes} de ${anio}<br>`;
}

function mostrarHora() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    salida += `Hora actual: ${horas}:${minutos}<br>`;
}

function mostrarDiaSemana() {
    const fecha = new Date();
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    salida += `Hoy es: ${dias[fecha.getDay()]}<br>`;
}

const opcion = prompt(`Elija qué desea ver:
1 - Fecha
2 - Hora
3 - Día de la semana
4 - Todo junto`);

switch(opcion) {
    case "1":
        mostrarFecha();
        break;
    case "2":
        mostrarHora();
        break;
    case "3":
        mostrarDiaSemana();
        break;
    case "4":
        mostrarFecha();
        mostrarHora();
        mostrarDiaSemana();
        break;
    default:
        salida += "Opción no válida.<br>";
}

document.getElementById("ejer8").innerHTML = salida;
}

function ejercicio13(){
    let numeros=[4,5,2,6,8,9]
    let pares=[]
    let impares=[]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    pares.sort(function(a, b ){return a-b});
    impares.sort(function(a, b){return a-b});

    if(numeros.length % 2 == 0){  
        numerosOrdenados= "Pares: " + pares + " Impares: " + impares
    }
    else{
        numerosOrdenados= "Impares: " + impares + " Pares: " + pares
    }

    document.getElementById("ejer13").innerHTML = numerosOrdenados;
}


function ejercicio16() {
    let pantallaTiempo = document.getElementById("ejer16");
    let intervalo = null;

    function mostrarFecha() {
        var d = new Date();
        pantallaTiempo.textContent = "Fecha y hora actual: " + d.toLocaleString();
        clearInterval(intervalo); 
    }

    intervalo = setInterval(mostrarFecha, 20000);
}

function ejercicio17() {
    let letra = prompt("Introduce la letra que quieres?");
    letra = letra.toUpperCase(); 

    let dniLetras = []; 

    for (let i = 1; i < 1000; i++) { 
        buscarLetra(i);
    }

    function buscarLetra(num) {
        let resto = num % 23;
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        if (letras[resto] == letra) {
            dniLetras.push(num);
        }
    }

    document.getElementById("ejer17").innerHTML = "La letra tiene "+dniLetras.length + " DNI. Listado letras: "+ dniLetras.join(", ");
}
