

// Importamos la clase Persona pero llamándola Usuario
import Usuario from './persona.js';

// Creamos una instancia
const usuario1 = new Usuario("Pedro", "Gómez", 30);

// Mostramos el objeto completo
console.log(usuario1);

// Probamos los métodos
console.log(usuario1.nombre);     // Pedro
console.log(usuario1.apellidos);  // Gómez
console.log(usuario1.edad);       // 30

// Modificamos algunos atributos
usuario1.nombre = "Juan";
usuario1.edad = 35;

console.log(usuario1.nombre); // Juan
console.log(usuario1.edad);   // 35
