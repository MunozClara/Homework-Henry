function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let numPar = numeros.filter((el) => el   %2 === 0)
  return numPar.length
}



module.exports = contarParesConContinue;
