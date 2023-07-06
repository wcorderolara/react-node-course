const Operaciones = require('./operaciones');
const {suma, resta, multiplicacion} = require('./operaciones2');
const {add, substract, multiply} = require('./operaciones3');

const op = new Operaciones(15, 10);

console.log('suma', suma(12,3));
console.log('resta', resta(5,2));

console.log(multiplicacion(5,48), 'multiplicacion');


console.log('suma', add(12,3));
console.log('resta', substract(5,2));

console.log(multiply(5,48), 'multiplicacion');
