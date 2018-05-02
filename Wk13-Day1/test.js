var reg = /[aeiou]/;
var stringZero = '12sdfgu67tfvDDgdfg';
var stringOne = 'DDDF';
var stringTwo = '12344*';
var stringThree = 'bcdo';

console.log(reg.test(stringZero));
console.log(reg.test(stringOne));
console.log(reg.test(stringTwo));
console.log(reg.test(stringThree));