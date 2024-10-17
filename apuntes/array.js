//let listaDeCompras = [];
//listaDeCompras[3] = "tomates";
//listaDeCompras[1] = "lechuga";

//console.log(listaDeCompras);
//listaDeCompras[1];

//let elementoDelArray = listaDeCompras[1];
//console.log(elementoDelArray);

//El metodo mas utilizado para los arreglos es el metodo length, que nos permite saber cuantos elementos contiene un arreglo, es decir, cual es su extensión:
//console.log(listaDeCompras.length);
//var nombres = ["Alay", "Justina", "Fede", "Clari"];
//console.log(nombres.length);

//OBJETOS MAS UTILIZADOS EN LOS ARREGLOS:
//los arreglos, ademas de ser un tipo de dato, tambien son objetos globales dentro de javascript. Esto significa que todos los arreglos estan asociados a una serie de metodos.Se conoce como metodo a aquellas funciones nativas o preestablecidas en los lenguajes de programacion, estas tareas son utilizadas para ahorrar lineas de codigo y realizar tareas de manera mas simple:

//var colores = ["amarillo", "azul"];
//colores.push("rojo");//Para agregar elementos de forma mas rapida al final de un arreglo
//colores.unshift("verde");//Para agregar uno o mas elementos al principio del array
//colores.pop();//Elimina y devuelve el ultimo elemento del array
//colores.shift();//Elimina y devuelve el primer elemento del array
//console.log(colores);

//Para ver si el array tiene incluido algun elemento:
//var pintores = ["picasso", "velazquez", "van gogh", "dali"];
//var incluyeDali = pintores.includes("monet");
//console.log(incluyeDali);

//Para ver si todos los elementos cumplen con una condicion
//var numeros = [1, 6, 8, 9];
//var cumpleCondicion = numeros.every(function(num) {
//    return num >= 5;
//});
//console.log(cumpleCondicion);

//Metodos split & join
//Estos metodos nos permiten transformar strings en arreglos y arreglos en strings
//var palabra = "Henri"; //esta escrito con i y va con "y"
//var palabraSeparada = palabra.split("");//convertimos el string en un arreglo. Las comillas juntas le dicen al metodo que queremos que separe la palabra por cada caracter. Si entre las comillas dejamos un espacio, va a separar el string en cada espacio que haya. Si entre las comillas ponemos "a", va a separar la palabra cada vez que encuentre la letra a.
//palabraSeparada.pop();//borra el ultimo elemento
//palabraSeparada.push("y") //agrega el elemento al final
//console.log(palabraSeparada);
//var palabraArreglada = palabraSeparada.join("");
//console.log(palabraArreglada);

//METODOS PARA RECORRER ARREGLOS: es decir, nos van a dejar recorrer elemento por elemento y hacer arreglos.
//FOREACH (para cada uno):
//Es importante aclarar que este metodo simplemente realiza alguna accion sobre el arreglo,pero no hara ningun cambio.
//var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log(num));
//ejemplo:
//si queremos un console.log solo de aquellos numeros que sean iguales a 3:
//numeros.forEach((num) => {
//if(num === 3){
//console.log(num);
//}
//})
//Si quisieramos sumarle 1 a todos los numeros del arreglo:
//El metodo MAP crea una copia del arreglo y le puede realizar cambios.
//var masUno = numeros.map((num) => {
//return num + 1;
//});
//console.log(masUno);

//let frutas = ["manzana", "banana"];
//para acceder a un elemento de Arrar mediante su INDICE:
//let primero = frutas[0];
//"manzana"
//let ultimo = frutas[frutas.length - 1];
//"banana"

//Encontrar el indice de un elemento del array:
//frutas.push("fresa");
//["manzana", "banana", "fresa"]
//let pos = frutas.indexOf("banana");
//1

//Eliminar un elemento mediante su posicion:
//let elementoEliminado = frutas.splice(1, 2)
//Empieza a eliminar desde el indice 1 y elimina 2 elementos.

//Eliminar varios elementos a partir de una posicion:
//let vegetales = ["repollo", "nabo", "rabano", "zanahoria"];
//let pos = 1, numElementos = 2;
//let elementosEliminados = vegetales.splice(1,2);
//console.log(vegetales);
//devuelve ["repollo", "zanahoria"]

//Acceso a elementos de un array:
//let arr = [
//    "este es el primer elemento",
//    "este es el segundo elemento",
//    "este es el ultimo elemento"
//];
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[- 1]);

//Bucle FOR para Arrays:
//var arr = [1, 2, 3, 4, 5];

//for(var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//Ejemplo: Si  queremos encontrar la letra P en una palabra:
//function encontrarLetraP(string){
//    var letras = string.split("");

//    for(let i = 0; i < letras.length; i++) {
//        if(letras[i] === "p") {
//            console.log("Si contiene P");
//        }
//    }
//}
//encontrarLetraP("Javascript");

//Bucle WHILE para arrays:
//var arr = [];

//while(arr.length < 5) {
//    arr.push("BOOM");
//}
//console.log(arr);

//encontrar numero faltante
// let numeros = [2,7,4,3,1,8,5,10,9];

// let result = numeros.sort((a,b) => a -b)

// for(let i = 0; i < numeros.length -1; i++){
//     if(numeros[i  + 1] !== numeros[i] + 1){
//         return numeros[i] + 1 //retorna el numero faltante
//     }
// }
// //si no falta ningun numero, retornamos null
// return null;

//encontrar numero repetido
// let numeros = [1, 2, 3, 4, 5, 5]
// let repetido;
// numeros.sort((a,b) => a -b)
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] == numeros[i +1]){
//         repetido = numeros[i];
//         console.log(repetido);
//     }
// }

//invertir texto
// let texto = 'clara'
// let textoInvertido = texto.split('').reverse().join('')
// console.log(textoInvertido);


