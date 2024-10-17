function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
if(array.every((elemento => typeof elemento === 'string'))){
  return array.sort()
}else{
  
  return array.sort((a, b) => a - b);
}
  
  }
  



module.exports = ordenarArray;
