// Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
// a tres de esas propiedades.


let persona = {
    "nombre" : "Ramón",
    "apellidos" : "Rivera Abascal",
    edad : 38,
    "dirección" : "C/Ricardo corazón de León",
    "ciudad" : "Tarragona",
    "pais" : "España",
}

let { nombre, apellidos, edad } = persona;

console.log(nombre);
console.log(apellidos);
console.log(edad);