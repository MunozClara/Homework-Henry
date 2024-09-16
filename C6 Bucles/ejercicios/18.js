
function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  let total = 1;

  for (let i = a; i <= b; i++) {
    total = total * i;
    console.log(total);
    
    // Si encuentras un 0 en el rango, el producto es 0
    if (i === 0) {
      return 0;
    }
  }

  return total;
}


console.log('iteracion con 1:' +productoEntreNúmeros(1,5));
console.log('iteracion con 2:' +productoEntreNúmeros(3,5));

module.exports = productoEntreNúmeros;