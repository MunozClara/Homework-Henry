function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  return Array.isArray(arr) && arr.length > 0;
}
//usamos Array.length(arr) para verificar si el argumento proporcionado es un array .
//usamos arr.length > 0 para comprobar la longitud del array, si la longitus es mayor que 0, significa que el array tiene al menos un elemento.
// usamos return directamente en vez de usar un if para ahorrar lineas de codigo y errores 
//La expresion Array.isArray(arr) && arr.length > 0 se evalua en un solo paso, si ambas condiciones son verdaderas, devolvera True, de lo contrario, devolvera False. Esto proporciona un resultado claro y directo. 

module.exports = esArrayNoVacio;