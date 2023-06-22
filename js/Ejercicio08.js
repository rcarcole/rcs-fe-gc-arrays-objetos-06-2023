// Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
// elemento y lo saque por consola.


let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

let seRepite = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let repetido = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        repetido = true;
        console.log("Palabra repetida:", arr1[i]);
        break;
      }
    }
    if (repetido) {
      break;
    }
  }
};

seRepite(javascript1, javascript2);