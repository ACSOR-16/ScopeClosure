// var pi; undefined pasa esto por default a no ser:
'use strict'
pi = 3.1416; //no permitira a no ser que antes sea declarada

function myFunction() {
  'use strict';
  return pi = 3.1416;
  console.log(pi);
}

console.log(myFunction());// en modo strict no se permite 