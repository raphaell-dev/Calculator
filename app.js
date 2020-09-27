var SumFunc = require('./operation/sum')
var SubFunc = require('./operation/subtraction')
var MultFunc = require('./operation/multiplication')
var DivFunc = require('./operation/division')


let val_1 = 8;
let val_2 = 10;

console.log("Sum: " + SumFunc(val_1, val_2));
console.log("Sub: " + SubFunc(val_1, val_2));
console.log("Mult: " + MultFunc(val_1, val_2));
console.log("Div: " + DivFunc(val_1, val_2));

