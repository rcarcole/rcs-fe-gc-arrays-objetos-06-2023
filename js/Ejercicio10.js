// Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//     dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//     nombre completo (nombre y apellidos) de la persona a modo de string.
    

let persona = {
    "nombre" : "Ramón",
    "apellidos" : "Rivera Abascal",
    edad : 38,
    "dirección" : "C/Ricardo corazón de León",
    "ciudad" : "Tarragona",
    "pais" : "España",
}

let nombreApellidos = (pers) => {
    console.log(pers.nombre, pers.apellidos);
}

nombreApellidos(persona);