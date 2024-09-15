
function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  let total = 0;

  for (let i = a; i <= b; i++) {
    total = total * i;
    // Si encuentras un 0 en el rango, el producto es 0
    if (i === 0) {
      return 0;
    }
  }

  return total;
}





module.exports = productoEntreNúmeros;