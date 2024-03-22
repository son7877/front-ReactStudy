const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
//짝수 인지 아닌지 하나한 계산해서 리스트 만들어 보여주기
// const isEven = [];
// for (let i = 0; i < list.length; i++) {
//   const index = list[i] % 2 === 0 ? true : false;
//   isEven.push(index);
// }
// console.log(isEven);

//map은 기준 리스트를 갖고 값이 다른 리스트를 만드는 것이다.
const isEvenList = list.map((element, index, arr) => {
  //   console.log(element, index, arr);
  return element % 2 === 0;
});
console.log(isEvenList);
