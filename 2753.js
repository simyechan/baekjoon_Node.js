// 2753

const i = require('fs').readFileSync('/dev/stdin').toString();
const y = Number(i);

if (y % 400 == 0) {
    console.log(1);
} else if(y % 4 == 0 && y % 100 != 0) {
    console.log(1);
} else {
    console.log(0);
}