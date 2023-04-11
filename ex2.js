/**
 * Que sucede aquí?
 */

//Que se reescribe las variables, en este caso, la variable4 sigue siendo 1.

 let variable1 = 1;
 let variable2 = 2;
 let variable3 = 3;
 let variable4 = 4;
 variable2= 2;
 varialbe3= 4;
 variable4= 1;
 variable1= -7;

 /**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  */

 //Va a tener el valor de 1, porque se ha reescrito el valor, podemos comprobarlo con un console.log
 console.log(variable4);

 //----------------------------------------------------------------

  variable2 = variable1;
  variable4 = variable2 * 2;

/**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  */

//En este punto la variable4 se ha reescrito, y tiene un valor de variable 2 que es 2 * por 2, osea 4.
console.log(variable4);