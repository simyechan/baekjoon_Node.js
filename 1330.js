// 1330

const i = require('fs').readFileSync('/dev/stdin').toString().split(' ');

if (Number(i[0]) > Number(i[1])) {
    console.log('>');
} else if (Number(i[0]) < Number(i[1])) {
    console.log('<');
} else {
    console.log('==');
}