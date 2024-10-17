function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  for( let i = 0; i < array.length; i++){
    let nuevoElemento = array[i];
    if(nuevoElemento.length >= 5){
      return nuevoElemento
    }
  }
  return undefined
}   

module.exports = obtenerPrimerStringLargo;
