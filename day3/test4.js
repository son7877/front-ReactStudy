//javascript java
//java 어떤 기능 호출하려면 method ex) public int sum(int a, int b)
//js function

function sum(a, b) {
  return a + b;
}
function diff(a, b) {
  return a - b;
}
console.log(diff(sum(2, 1), 1));

const sum1 = (a, b = 4) => {
  return a + b;
};
console.log(sum1(5)); // b가 default값이 들어감

const diff1 = (a, b) => a - b;
const division = (a, b) => {
  const sum = () => a + b;
  return sum() / b;
};
console.log(division(1, 3));

// sum2(3) :5 -> diff2(5) : 3 -> sum2(3,10) -> 13 -> diff(13,4) -> 9
const sum2 = (a, b = 2) => a + b;
const diff2 = (a, b = 2) => a - b;
const multi2 = (a, b = 2) => a * b;
const division2 = (a, b = 2) => a / b;
console.log(diff(sum2(diff2(sum2(3)), 10), 4)); //sum2(3) -> 함수가 아니고 호출한 값
console.log(sum2); // 이게 함수

const list = [diff2, sum2, multi2, division2, (a) => a * a];
const [diff3, sum3, multi3, division3, pow3] = list;
console.log(sum3(1, 2));
const pow = list[4];
const list2 = [];
let total = 0;
for (let i = 0; i < list.length; i++) {
  list2.push(list[i](i));
  total += list[i](i);
}
console.log(list2);
console.log(total);
