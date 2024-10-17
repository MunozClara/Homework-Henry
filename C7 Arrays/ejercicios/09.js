
function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array
   // Tu código:
   if(array.length === 0){
      return undefined;
   }
   let indiceAleatorio = Math.random() * array.length;
   indiceAleatorio = Math.floor(indiceAleatorio);
   return array[indiceAleatorio]
}

module.exports = obtenerElementoAleatorio;
