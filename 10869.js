// 10869

const i = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(i[0]) + Number(i[1]));
console.log(Number(i[0]) - Number(i[1]));
console.log(Number(i[0]) * Number(i[1]));
console.log(Math.floor(Number(i[0]) / Number(i[1])));
console.log(Number(i[0]) % Number(i[1]));