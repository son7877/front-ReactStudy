// list, object
// int[] arr = new int[123];
// List<Integer> list = new ArrayList<>();

const list = [];
//  arr[0]=1;
// list.add(1)
list.push(1);
list.pop;
// console.log(list);

const list2 = [];
for (let i = 1; i <= 10; i++) {
  list2.push(i);
}

//찾고 싶은 인덱스
console.log(list2[0]);
//리스트 길이
console.log(list2.length);

//369게임
const list3 = [];
for (let num = 1; num <= 10; num++) {
  let index = num;
  if ((num + "").includes("3")) index = "짝";
  if ((num + "").includes("6")) index = "짝";
  if ((num + "").includes("9")) index = "짝";
  list3.push(num);
}
console.log(list3);

// const  num = index%3==0 ? "짝" : index // 3항 연산자
const list4 = [];
for (let num = 1; num <= 40; num++) {
  const index =
    `${num}`.includes("3") || `${num}`.includes("6") || `${num}`.includes("9")
      ? "짝"
      : num;
  list4.push(index);
}
console.log(list4);

// 100~1000가 들어있는 리스트 중에서
// 3,6,9만 들어있는 리스트를 만들자
const mainlist = [];
for (let i = 100; i <= 1000; i++) {
  mainlist.push(i);
}

const list369 = [];
for (let i = 0; i < mainlist.length; i++) {
  const index =
    `${mainlist[i]}`.includes("3") ||
    `${mainlist[i]}`.includes("6") ||
    `${mainlist[i]}`.includes("9")
      ? mainlist[i]
      : false;
  if (index) list369.push(index);
}
console.log(list369);
