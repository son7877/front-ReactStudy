// 변수 선언 const, let - 타입이 없다
let text = "hi";
text = 1;

// function sum(a, b) {
//   return a + b;
// }
const sum1 = (a, b) => {
  return a - b;
};
console.log(sum1("hi", 2)); //NaN

const sum2 = (a, b) => {
  return a + b;
};

const arr = [1, 2, 3, 4, 5];

arr.filter; // 걸러낼때
arr.map; // 원본을 가공
arr.sort;

const obj = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};
const g = obj.gender === 1 ? "남" : "여";
console.log(obj.toString());
// 없는 필드를 콘솔에 출력 할 때
console.log(obj.address); // undefined
console.log(obj.address && obj.address.city); //앞에 있으면(True) 뒤에거 실행 ->undefined
console.log(obj.address?.city); // address가 있으면 .address.city, 없으면 .address 실행 ->undefined

const arr2 = ["김부자", "김세현", "김재민"];
const [p1, p2, p3] = arr2; // p2:"김세현"
const obj2 = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () => `${obj2.name} ${obj2.age} ${obj2.gender === 1 ? "남" : "여"}`,
};
const { name, age, gender } = obj2;
const makePerson = (name, age) => {
  return { name, age };
};
console.log(makePerson("안홍범", 20));

const isAdult = ({ name, age, ...rest }) => {
  return { name, age, isAdult: age > 20, ...rest };
};
const person = makePerson("안홍범", 20);
console.log(isAdult(obj2));
