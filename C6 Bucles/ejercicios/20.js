function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let total = 0

   for(i= 1; i <= n; i++){
      total= total + i
      if(total >= 100){
         break;
      }
   }
   return total
}

module.exports = sumarHastaNConBreak;
