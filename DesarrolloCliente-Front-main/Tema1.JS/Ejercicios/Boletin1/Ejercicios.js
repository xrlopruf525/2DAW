
/*Ejercicio 12
let num1 = Number(prompt("Introduce el primer número"));
let num2 = Number(prompt("Introduce el segundo número"));

if (num1 > num2) {
    document.getElementById("ejercicio12").innerHTML = 
        "La suma de los números es " + (num1 + num2) + 
        " y la diferencia es " + (num1 - num2);
} else if (num1 < num2) {
    document.getElementById("ejercicio12").innerHTML = 
        "El producto de los números es " + (num1 * num2) + 
        " y la división es " + (num2 / num1);   
} else {
    document.getElementById("ejercicio12").innerHTML = "Los dos números son iguales";
}
  
//Ejercicio 13

let nota1 = Number(prompt("Introduce la primera nota: "));
let nota2 = Number(prompt("Introduce la segunda nota: "));
let nota3 = Number(prompt("Introduce la tercera nota: "));
media = (nota1+nota2+nota3) / 3;
if(media >= 4){
    document.getElementById("ejercicio13").innerHTML="Apto";
} else {
    document.getElementById("ejercicio13").innerHTML="Suspensos";
}

//Ejercicio 17

let nombre = prompt("Introduce el nombre: ");
let totalPreg = Number(prompt("Total de preguntas: "));
let pregCorr = Number(prompt("Preguntas correctas: "));

porcentaje = (pregCorr/totalPreg)*100;

if(porcentaje>=90){
    document.getElementById("ejercicio17").innerHTML="Nivel superior";
} else if(porcentaje>=75 && porcentaje < 90) {
    document.getElementById("ejercicio17").innerHTML="Nivel medio";
}else if(porcentaje>=50 && porcentaje < 75){
    document.getElementById("ejercicio17").innerHTML="Nivel bajo";
} else {
    document.getElementById("ejercicio17").innerHTML="Fuera de nivel";
}


//Ejercicio 26
cont=0;
suma=0;
while(cont<5){
cont++;
num = Number(prompt("Introduzca numero: "));
suma=suma+num;
}
document.getElementById("ejercicio26").innerHTML="La suma es: "+suma;


//Ejercicio 38
let num=Number(prompt("Introduzca el numero:"));
cont=0;
for(i=2;i<=num-1;i++){
    let esPrimo=false;
    if(num%i==0){
        esPrimo=true;
    }
    if(esPrimo){
        document.getElementById("ejercicio38").innerHTML="El numero "+num+" es primo";
    } else {        
        document.getElementById("ejercicio38").innerHTML="El numero "+num+" no es primo";
        }
}

*/

//Ejercicio 39

let resultado = "";
let contador = 0; 

for (let num = 2; contador < 100; num++) {  
    let esPrimo = true;

    for (let div = 2; div < num; div++) { 
        if (num % div == 0) {
            esPrimo = false;
            break; 
        }
    }

    if (esPrimo) {
        resultado += num + "<br>";
        contador++; 
    }
}

document.getElementById("ejercicio39").innerHTML = resultado;




//Ejercicio 47
let h1 = Number(prompt("Introduzca la hora 1:"));
let m1 = Number(prompt("Introduzca el minuto 1:"));
let h2 = Number(prompt("Introduzca la hora 2:"));
let m2 = Number(prompt("Introduzca el minuto 2:"));

let hora1 = (h1 * 60) + m1;
let hora2 = (h2 * 60) + m2;

let mensaje;
let diferenciaMin;

if (hora1 > hora2) {
    mensaje = "La primera hora es posterior a la segunda hora. ";
    diferenciaMin = hora1 - hora2;
} else if (hora1 < hora2) {
    mensaje = "La primera hora es anterior a la segunda hora. ";
    diferenciaMin = hora2 - hora1;
} else {
    mensaje = "Ambas horas son iguales. ";
    diferenciaMin = 0;
}

let horas = Math.floor(diferenciaMin / 60);
let minutos = diferenciaMin % 60;

mensaje += `Han pasado ${horas} horas y ${minutos} minutos.`;

document.getElementById("ejercicio47").innerHTML = mensaje;

let resultado1="";
let num=Number(prompt("Introduzca el numero: "));

for(i=1;i<=10;i++){
    res=i*num;
    resultado1+=num+" * "+i+"= "+res+"<br>";
}
document.getElementById("tabla").innerHTML = resultado1;





