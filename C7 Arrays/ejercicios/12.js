function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let mayúsculas = array.map((e) => e.toUpperCase())
  return mayúsculas
}

module.exports = convertirStringAMayusculas;
