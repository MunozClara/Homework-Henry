function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }else if(letra.length >= 2){
    return "Dato incorrecto"
  }  else{
    return "Dato incorrecto"
  }
}

module.exports = esVocal;

/*
El problema en tu función radica en la condición del if. Estás utilizando el operador && (AND lógico), lo que significa que estás verificando si letra es simultáneamente igual a "a", "e", "i", "o", y "u", lo cual es imposible porque una letra no puede ser todas esas letras al mismo tiempo.

Deberías usar el operador || (OR lógico) para verificar si letra es alguna de las vocales. Además, es mejor manejar el caso de la longitud de la cadena antes de comparar si es vocal, para evitar verificar cadenas más largas de una letra.
*/






