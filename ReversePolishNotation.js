const rpn = require('reverse-polish-notation');

console.log(rpn('5 2 + 3 *'));
console.log(rpn('5 2 * 2 * 4 +'));
console.log(rpn('5'));
console.log(rpn('0 1 *'));
