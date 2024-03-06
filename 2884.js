// 2884

const i = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let h = Number(i[0]);
let m = Number(i[1]);

m -= 45;
if (m < 0) {
    if (h > 0) {
        h -= 1;
        m += 60;
    } else {
        h = 23;
        m += 60;
    }
}
console.log(`${h} ${m}`);