// scripts.js

var a = prompt('Enter a');
var b = prompt('Enter b');
var value = (a * a) - (2 * a * b) + (b * b);
console.log(value);
alert('Calculated value is:' +  value );
(value >=0)? console.log ('wynik dodatni') : console.log('wynik ujemny');
(value ==0)? alert('result is zero') : alert('result is not zero');
