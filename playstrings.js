// EXPLICACION Y EJERCICIOS CON STRINGS
// Moviles

//EL LET ES COMO UN NUEVO ESPACIO DE MEMORIA

let marca = "Samsung";
let modelo = 'Galaxy M-52' // tecla del ? Se pueden poner las comillas que quieras pero no se pueden mezclar. Solo en algunos casos
//influye el tipo de comillas que pones.

//operaciones básicas con strings
// SABER SU LENGITUD:
console.log(marca.length);

//Acceder a una posición de un string - Para acceder a una posición del string, accedemos al SUBINDICE. - LAS POSICIONES SIEMPRE
// se empiezana contar desde 0 (los indices sirven para acceder a una parte del string)
//Quiero acceder a la primera posición / [ ESTO SE LLAMAN BRACKETS ] { CORCHETES, SABA APPROACH }
console.log(marca[6]);


//Si ponemos la marca con la resta empezamos de derecha a izquierda
console.log(marca[marca.length -3]);