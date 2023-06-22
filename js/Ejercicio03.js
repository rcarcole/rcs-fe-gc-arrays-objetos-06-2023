// Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
// array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en
// su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los
// últimos dos elementos. Obtén el índice del elemento "Funciones".


let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

//elimina "DOM" del array
javascript1 = javascript1.filter(item => item !== "DOM");
// ñade en su lugar el elemento "Objetos"
javascript1.unshift("Objetos");
// Elimina el elemento "Arrays"
javascript1 = javascript1.filter(item => item !== "Arrays");
// Añade en su lugar el elemento "ArraysDifíciles"
javascript1.splice(2, 0, "ArraysDifíciles");

// Haz una copia del array que solo incluya los últimos dos elementos
let copia = javascript1.slice(-2);
//Obtén el índice del elemento "Funciones".
let indiceFunciones = javascript1.indexOf("Funciones");

console.log(javascript1);
console.log(copia);
console.log(indiceFunciones);