function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest.reduce((acc, current) => acc + current,0);
  let resultado = suma / resultadosTest.length;
  return resultado
}

module.exports = promedioResultadosTest;
