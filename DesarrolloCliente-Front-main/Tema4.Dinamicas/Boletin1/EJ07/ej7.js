const sumar = (...numeros) => {
  return numeros.reduce((num, suma) => num + suma, 0);
};

console.log(sumar(2, 5, 10, 3)); // 20
console.log(sumar(1, 2, 3, 4, 5)); // 15
console.log(sumar()); // 0