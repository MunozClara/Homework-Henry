function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = []; // Aquí guardamos los meses encontrados

  // Recorremos el array
  for (let i = 0; i < array.length; i++) {
    if (["Enero", "Marzo", "Noviembre"].includes(array[i])) {
      meses.push(array[i]); 
    }
  }


  if (meses.length === 3) {
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


module.exports = mesesDelAño;
