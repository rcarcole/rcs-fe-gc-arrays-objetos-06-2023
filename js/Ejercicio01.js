// Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
// array y lo saque por consola.

let miArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function longitudArray(miArray){
    console.log('La longitud del array es: ' +miArray.length);
}

longitudArray(miArray);

const getElementRandom = (array) => {
    let i = Math.floor(Math.random()*array.length);
    let elementRandom = array[i];
    console.log("Elemento aleatorio: " +elementRandom);
}

getElementRandom(miArray);
