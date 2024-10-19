function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   const test = {
      prop: 42,
      func: function () {
      return this.prop;
      },
   }; 
   console.log(test.func());
}

module.exports = invocarCallback;
