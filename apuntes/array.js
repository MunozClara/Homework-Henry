//let listaDeCompras = [];
//listaDeCompras[3] = "tomates";
//listaDeCompras[1] = "lechuga"

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
//colores.push("rojo");//Para agregar elementos de forma mas rapida
//colores.unshift("verde");//Para agregar elementos al principio del array
//colores.pop();//Para eliminar el ultimo elemento del array 
//colores.shift();//Para eliminar el primer elemento del array
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
var palabra = "Henri"; //esta escrito con i y va con "y"
var palabraSeparada = palabra.split("");//convertimos el string en un arreglo. Las comillas juntas le dicen al metodo que queremos que separe la palabra por cada caracter 




