function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num > 99 && num <= 999){
    return true
  }else return false
}
console.log(tieneTresDigitos(1300));


module.exports = tieneTresDigitos;
