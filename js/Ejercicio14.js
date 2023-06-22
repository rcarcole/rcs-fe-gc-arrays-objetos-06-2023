// . Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array


let receta = {
    "nombre" : "Tortilla española",
    "tiempo" : "30 minutos",
    "ingredientes" : ["aceite", "sal", "patatas", "huevos"]
}

let receta2 = {
    "nombre" : "Tortilla a la francesa",
    "tiempo" : "50 minutos",
    "ingredientes" : ["aceite de coche", "salpimentón", "patatas podridas", "huevos podridos"]
}

let receta3 = {
    "nombre" : "Tortilla de caca",
    "tiempo" : "20 minutos",
    "ingredientes" : ["aceiteVegetal", "salamontes", "patatasAsadas", "huevosAvestruz"]
}

let popurriRecetas = [receta, receta2, receta3];

let contenidoTotalRecetas = (rec) => {
    console.log(rec.nombre);
    console.log(rec.tiempo);
    console.log(rec.ingredientes);
}

for (let i = 0; i < popurriRecetas.length; i++) {
    contenidoTotalRecetas(popurriRecetas[i]);
}

