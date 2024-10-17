
function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  //primero verificamos si el array esta vacio 
  if (numeros.length === 0) {
    return null;
  }

  //ordenamos los numeros para asegurarnos que esten en orden
  numeros.sort((a, b) => a - b);

  //comparamos los numeros
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] !== numeros[i] + 1) {
      return numeros[i] + 1;
    }
  }
  //si el array no tiene errores(si tiene todos los numeros consecutivos)
  return null;
}

module.exports = encontrarNumeroFaltante;
