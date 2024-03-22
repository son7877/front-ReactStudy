// let 변하는 변수(해당 블록 내에서만 사용 가능), const 상수(매우 많이 씀)
// let i=0;
// const i =0; 오류!!!

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0 && i > 0) {
//     // 계산 덜 걸리는 것 생각하기
//     console.log(i);
//   }
// }

// //이것도 되긴 됨 , 비추
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === "0" && i > "0") {
//     // === :변수의 타입까지 비교하고 싶을 때 사용
//     console.log(i);
//   } else if (i % 2 !== "0") console.log(true);
// }

// 2에서 100까지 소수 탐색
for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) count++;
  }
  if (count === 2) {
    console.log(i);
  }
}

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
