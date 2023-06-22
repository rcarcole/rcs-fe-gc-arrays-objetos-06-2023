// Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes.


let receta = {
    "nombre" : "Tortilla de patatas",
    "tiempo" : "30 minutos",
    "ingredientes" : ["patatas", "huevos", "aceite", "sal"],
}

let contenidoReceta = (rec) => {
    console.log(rec.nombre);
    console.log(rec.tiempo);
    console.log(rec.ingredientes);
}

contenidoReceta(receta);