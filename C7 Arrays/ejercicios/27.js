function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(" "); //el metodo .join("") concatena todos los elementos del array palabra en un solo string, separandolos por un espacio " ". Si usamos el metodo .join() sin las comillas, por defecto nos agrega comas entre las palabras.
}

module.exports = dePalabrasAFrase;
