// 2588

const i = require('fs').readFileSync('/dev/stdin').toString().split('\n');

console.log(Number(i[0]) * Math.floor(Number(i[1]) % 10));
console.log(Number(i[0]) * Math.floor(((Number(i[1]) / 10)) % 10));
console.log(Number(i[0]) * Math.floor(Number(i[1]) / 100));
console.log(Number(i[0]) * Number(i[1]));