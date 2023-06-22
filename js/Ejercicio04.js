// Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

let hola = 'Hola';
let arrayHola = hola.split('');
let arrayHolaInvertida = arrayHola.reverse();
let holaInvertida = arrayHolaInvertida.join('');

console.log(holaInvertida);