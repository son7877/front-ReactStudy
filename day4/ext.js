// 리스트를 만들고 1..10까지 넣기
const list = [];
for (let i = 1; i <= 10; i++) {
  list.push(i);
}
// console.log(list);
// 5번째 값을 10으로 바꾸기

list["4"] = 10; //문자로 인덱스 찾기도 가능
// console.log(list);

// object ***** 중괄호
const obj = { age: 10, print: () => console.log(obj["age"]) };
// Map<String,Integer> map = new HashMap<>();
obj["name"] = "park"; //key,value

for (let i = 1; i <= 10; i++) {
  //   obj[i - 1] = i;
}

// console.log(obj);
// obj["print"]();

const classRoom = {
  students: [
    //list
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
  ],
  manager: [{ name: "송희", age: 30 }],
};

console.log(classRoom.students[1].name);
// console.log(classRoom["students"][1]["name"]);
// classRoom["list"] = list;
classRoom.list = list;
list[0] = 100;
console.log(classRoom); // 같은 곳을 참조해서 두 곳 모두 값이 바뀜

const list2 = classRoom.list;
