// [Imprimir números del 1 al 10: Usa un bucle for para imprimir los números del 1 al 10 en la consola.

// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // Suma de números del 1 al 10: Usa un bucle for para sumar los números del 1 al 10 y mostrar el resultado en la consola.
// let total = 0;
// for (i = 0; i <= 10; i++) {
//   total = total + i;
//   console.log(total);
// }

// // Multiplicación de números del 1 al 5: Usa un bucle for para imprimir la tabla de multiplicar del 5 (es decir, 5x1, 5x2, ..., 5x10).

// for (i = 0; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// // Contar hacia atrás: Usa un bucle for para contar hacia atrás desde el 10 hasta el 1 y mostrar cada número en la consola.
// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // Generar un array con números del 1 al 5: Usa un bucle for para llenar un array con los números del 1 al 5 y luego imprime el array en la consola.]
// let numero = [];
// for (i = 1; i <= 5; i++) {
//   numero.push(i);
// }
// console.log(numero);

// // Suma de números pares: Usa un bucle for para sumar todos los números pares del 1 al 20 y mostrar el resultado en la consola.

// // Invertir un array: Crea un array con algunos elementos (por ejemplo, [1, 2, 3, 4, 5]) y usa un bucle for para crear un nuevo array con los mismos elementos pero en orden inverso.

// // Filtrar números mayores a 5: Dado un array de números (por ejemplo, [3, 7, 2, 9, 1, 6]), usa un bucle for para imprimir solo los números que sean mayores a 5.

// AND;
// function mayorYMenorYPar(num) {
//   if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
//   else console.log(false);
// }
// mayorYMenorYPar(6);

// 124;

// OR;
// function operadorOr(srt) {
//   if (srt === "Henry" || srt.length < 2) console.log(true);
//   else console.log(false);
// }

// operadorOr("4");

// NOT;
// function negacion(permiso) {
//   if (permiso !== true) console.log("Tiene permiso");
// }
// negacion(false);

// function condicionCompleja(num) {
//   if ((num > 9 && num % 2 === 0) || num === 3) console.log(true);
//   else console.log(false);
// }
// condicionCompleja(10);
// condicionCompleja(6);
// condicionCompleja(3);
// condicionCompleja(5);

// var foo = 5;
// switch (foo) {
//   case 2:
//     console.log(2);
//     break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
//   default:
//     console.log("default");
//   // fall-through
//   case 1:
//     console.log("1");
// }

// var Animal = "Jirafa";
// switch (Animal) {
//   case "Vaca":
//   case "Jirafa":
//   case "Perro":
//   case "Cerdo":
//     console.log("Este animal subirá al Arca de Noé.");
//     break;
//   case "Dinosaurio":
//   default:
//     console.log("Este animal no lo hará.");
// }

// var foo = 1;
// var output = "Salida: ";
// switch (foo) {
//   case 10:
//     output += "¿Y ";
//   case 1:
//     output += "Cuál ";
//     output += "Es ";
//   case 2:
//     output += "Tu ";
//   case 3:
//     output += "Nombre";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Por favor, selecciona un valor del 1 al 6.");
// }
