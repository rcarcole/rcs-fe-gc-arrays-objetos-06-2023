// Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//     tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//     propiedades para todos los objetos.
    

let arrayPersonas = [
    {
        "nombre" : "Pedro",
        "apellidos" : "Sanchez mentiroso",
        edad : 50,
    },
    {
        "nombre" : "Mariano",
        "apellidos" : "Rajoy dislexico",
        edad : 55,
    },
    {
        "nombre" : "Pablo",
        "apellidos" : "Iglesias coletas",
        edad : 40,
    },
]

let valorPropiedad = (array, propiedad) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i][propiedad]);
    }
}

valorPropiedad(arrayPersonas, "apellidos");