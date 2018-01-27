// scripts.js

var a = prompt('Enter a');
var b = prompt('Enter b');
var value = (a * a) - (2 * a * b) + (b * b);
console.log(value);
if (value > 0) {
    alert ('Calculated value is bigger than 0')
} else if (value < 0) {
    alert ('Calculated value is smaller than 0')
} else if (value == 0) {
    alert ('Calculated value equals 0')
}
