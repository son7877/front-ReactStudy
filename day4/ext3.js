const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세영", age: 15 },
  { name: "정희석", age: 33 },
];
//map
const isAdultList = students.map((el, i, arr) => {
  // el : element 리스트 내의 요소
  return { ...el, isAdult: el.age > 19 };
});
// console.log(isAdultList);

const ageupFunc = (el) => ({ ...el, age: el.age + 1 });

const ageup = students.map(ageupFunc);

// console.log(ageup);

const adultList = students.filter((el, index, arr) => {
  return el.age > 19;
});
console.log(adultList);

//성이 김씨인 사람만 뽑기
const kimList = students.filter((el) => {
  return el.name.charAt(0) == "김";
});
console.log(kimList);

// sort정렬
// const ageAsc = students.sort((a, b) => b.age - a.age);
console.log(ageAsc);
console.log(students);
