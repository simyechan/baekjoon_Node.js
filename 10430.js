// 10430

const i = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log((Number(i[0]) + Number(i[1])) % Number(i[2]));
console.log(((Number(i[0]) % Number(i[2])) + (Number(i[1]) % Number(i[2]))) % Number(i[2]));
console.log((Number(i[0]) * Number(i[1])) % Number(i[2]));
console.log(((Number(i[0]) % Number(i[2])) * (Number(i[1]) % Number(i[2]))) % Number(i[2]));