function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  //'should return the first multiple of n in the sequence'
  let multiplo = undefined
for(let i = 0; i < secuencia.length; i++){
  if(secuencia[i] % n === 0){
    multiplo = secuencia[i]
    break
  }
}
return multiplo
}


module.exports = encontrarPrimerMultiploDeN;
