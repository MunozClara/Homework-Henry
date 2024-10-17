function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let repetido;
  numeros.sort((a, b) => a - b);
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == numeros[i + 1]) {
      repetido = numeros[i];
    }
  }
  return repetido
  
}

module.exports = encontrarElementoRepetido;
