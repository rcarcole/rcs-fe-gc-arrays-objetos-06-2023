// Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// resultantes concatenados.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayPares = [];
let arrayImpares = [];

let dividirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        arrayPares.push(array[i]);
    } else {
        arrayImpares.push(array[i]);
    }
  }
};

dividirArray(array);

let concatenarNumeros = arrayPares.concat(arrayImpares);
console.log(concatenarNumeros);