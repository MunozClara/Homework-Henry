//ARRAYS ASOCIATIVOS
//Es como un array que tiene un valor asociado  

let pc1 = {
    nombre: "DaltoPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
};


let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];


frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
el procesador es: <b>${procesador}</b> <br>
la memoria ram es: <b>${ram}</b> <br>
el espacio en el disco es de <b>${espacio}</b>`


document.write(frase);

