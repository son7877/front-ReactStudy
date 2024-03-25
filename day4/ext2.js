const classRoom = {
  students: [
    //list
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
    { name: "김세영", age: 15 },
    { name: "정희석", age: 33 },
  ],
};
//성인인지 판단해서 리스트 만들기
const isAdultList = [];
for (let i = 0; i < classRoom.students.length; i++) {
  const student = classRoom.students[i];
  isAdultList.push({ ...student, isAdult: student.age > 19 });
}
console.log(isAdultList);

const [b, jh] = classRoom.students;
const { name, age } = jh;
console.log(b, jh);
console.log(name, age);

for (let i = 0; i < classRoom.students.length; i++) {
  classRoom.students[i].age++;
}
console.log(classRoom.students);

const ageup = [];
const ageup2 = [];
//원본 값 변동을 막기 위한 방법 1. 다시 생성
for (let i = 0; i < classRoom.students.length; i++) {
  const student = classRoom.students[i];
  const { age } = student;
  const obj = {
    ...student,
    age: age + 1,
  };
  ageup.push(obj);
}
//원본 값 변동을 막기 위한 방법 2. spread 구문
for (let i = 0; i < classRoom.students.length; i++) {
  const obj2 = {
    ...classRoom.students[i], // 변동하려는 값 이외는 ...처리를 통해 동결
    age: classRoom.students[i].age + 1,
  };
  ageup2.push(obj2);
}
console.log(ageup);
console.log(ageup2);
console.log(classRoom.students);
