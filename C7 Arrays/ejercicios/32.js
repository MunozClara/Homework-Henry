function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:0
  // Convertimos el string a minúsculas y eliminamos los caracteres no alfabéticos
  let textoLimpio = string.toLowerCase().replace(/[^a-z]/g, "");

  // Invertimos el texto limpio
  let textoInvertido = textoLimpio.split("").reverse().join("");

  // Comparamos el texto limpio con el texto invertido y retornamos el resultado
  return textoLimpio === textoInvertido;
}

module.exports = esPalindromo;
