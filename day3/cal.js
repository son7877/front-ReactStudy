const cal = [
  0,
  (a) => {
    // 익명함수
    cal[5].push(cal[0]);
    cal[0] += a;
  },
  (a) => {
    cal[5].push(cal[0]);
    cal[0] -= a;
  },
  (a) => {
    cal[5].push(cal[0]);
    cal[0] *= a;
  },
  (a) => {
    cal[5].push(cal[0]);
    cal[0] /= a;
  },
  [],
];

cal[1](4);
cal[2](1);
const [cal1, cal2] = cal;
console.log(cal[5], cal[0] === total);
console.log(total);
console.log(cal.toString);
