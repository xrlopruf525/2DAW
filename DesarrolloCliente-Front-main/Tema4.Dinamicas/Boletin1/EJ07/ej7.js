const sumar = (...numeros) => {
  return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
};


console.log(sumar(2, 5, 10, 3)); // 20
console.log(sumar(1, 2, 3, 4, 5)); // 15
console.log(sumar()); // 0