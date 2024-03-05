// 9498

const i = require('fs').readFileSync('/dev/stdin').toString();

const p = Number(i);

if (p > 89) {
    console.log('A');
} else if (p > 79) {
    console.log('B');
} else if (p > 69) {
    console.log('C');
} else if (p > 59) {
    console.log('D');
} else {
    console.log('F');
}