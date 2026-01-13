// persona.js

// Creamos la clase Persona
export default class Persona {
  constructor(nombre, apellidos, edad) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
  }

  // Métodos consultores (getters)
  get nombre() {
    return this._nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  get edad() {
    return this._edad;
  }

  // Métodos modificadores (setters)
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set apellidos(nuevosApellidos) {
    this._apellidos = nuevosApellidos;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }
}
