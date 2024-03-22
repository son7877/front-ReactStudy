const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
//짝수 인지 아닌지 하나한 계산해서 리스트 만들어 보여주기
const isEven = [];
for (let i = 0; i < list.length; i++) {
  const index = list[i] % 2 === 0 ? true : false;
  isEven.push(index);
}
console.log(isEven); //
