// Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
// 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let array1 = [1, 2, 3];
let array2 = [8, 9, 10];
let newArray = [];
let intercalador = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    console.log(newArray);
}

intercalador(array1, array2);