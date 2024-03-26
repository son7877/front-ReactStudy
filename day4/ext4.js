// alert("1234");
// const is = confirm("밥 먹었니");

// setTimeout(() => {
//   alert("hello");
// }, 2000);

// const interval = setInterval(() => {
//   alert("hello");
// }, 2000);

// setTimeout(() => clearInterval(interval), 5000);

//1초마다 alert("hello") 이거 실행 할거고
//3초마다 confirm("end?") yes면 모든 것을 종료시킬거다
// const end = confirm("end?");
// const interval = setInterval(() => {
//   alert("hello");
// }, 1000);
// const interval2 = setInterval(() => {
//   if (end) {
//     clearInterval(interval);
//     clearInterval(interval2);
//   }
// }, 3000);

//글자바꾸기
// const txt = document.getElementById("txt");
// let count = 1;
// setInterval(() => {
//   txt.innerHTML = `count: ${count++}`;
// }, 1000);

// 단순 데이터 -> 팀명, 승, 패, 득실차, 킬, 데스, 어시스트
// 승률 : 승+패/승, kda: 킬+어시스트/데스, 순위: 승수->득실차로 비교
const lckteam = {
  teams: [
    {
      rank: 1,
      name: "젠지",
      wins: 17,
      loses: 1,
      difference: 29,
      kill: 596,
      death: 320,
      assist: 1391,
    },
    {
      rank: 2,
      name: "티원",
      wins: 15,
      loses: 3,
      difference: 24,
      kill: 637,
      death: 417,
      assist: 1423,
    },
    {
      rank: 3,
      name: "한화생명",
      wins: 15,
      loses: 3,
      difference: 19,
      kill: 590,
      death: 367,
      assist: 1478,
    },
    {
      rank: 4,
      name: "kt",
      wins: 11,
      loses: 7,
      difference: 8,
      kill: 621,
      death: 545,
      assist: 1530,
    },
    {
      rank: 5,
      name: "dk",
      wins: 9,
      loses: 9,
      difference: 0,
      kill: 512,
      death: 450,
      assist: 1226,
    },
    {
      rank: 6,
      name: "광동",
      wins: 7,
      loses: 11,
      difference: -7,
      kill: 505,
      death: 654,
      assist: 1276,
    },
    {
      rank: 7,
      name: "피어엑스",
      wins: 6,
      loses: 12,
      difference: -11,
      kill: 492,
      death: 574,
      assist: 1196,
    },
    {
      rank: 8,
      name: "농심",
      wins: 4,
      loses: 14,
      difference: -16,
      kill: 429,
      death: 609,
      assist: 1026,
    },
    {
      rank: 9,
      name: "drx",
      wins: 3,
      loses: 15,
      difference: -21,
      kill: 353,
      death: 577,
      assist: 850,
    },
    {
      rank: 10,
      name: "ok저축은행",
      wins: 3,
      loses: 15,
      difference: -25,
      kill: 374,
      death: 603,
      assist: 945,
    },
  ],
};
const winRate = (el) => ({
  ...el,
  winRate: (el.wins / (el.wins + el.loses)).toFixed(2),
});
const kda = (el) => ({
  ...el,
  kda: ((el.kill + el.assist) / el.death).toFixed(2),
});
const lck = lckteam.teams.map(winRate).map(kda);

const tbody = document.getElementById("tbody");
for (let i = 0; i < lckteam.teams.length; i++) {
  const el = lckteam.teams[i];
  const tr = document.createElement("tr");
  const rank = document.createElement("td");
  rank.innerHTML = el.rank;
  tr.append(rank);
  const name = document.createElement("td");
  name.innerHTML = el.name;
  tr.append(name);
  const win = document.createElement("td");
  win.innerHTML = el.wins;
  tr.append(win);
  const lose = document.createElement("td");
  lose.innerHTML = el.loses;
  tr.append(lose);
  const winLoseDiff = document.createElement("td");
  winLoseDiff.innerHTML = el.difference;
  tr.append(winLoseDiff);
  const rate = document.createElement("td");
  rate.innerHTML = (el.wins / (el.wins + el.loses)).toFixed(2);
  tr.append(rate);
  const kda = document.createElement("td");
  kda.innerHTML = ((el.kill + el.assist) / el.death).toFixed(2);
  tr.append(kda);
  const kill = document.createElement("td");
  kill.innerHTML = el.kill;
  tr.append(kill);
  const death = document.createElement("td");
  death.innerHTML = el.death;
  tr.append(death);
  const assist = document.createElement("td");
  assist.innerHTML = el.assist;
  tr.append(assist);
  tbody.append(tr);
}
const onClickRemoveTable = () => {
  const teams = document.getElementById("tbody");
  if (teams) return teams.remove();
};

// const box = document.getElementById("box");
// const p = document.createElement("p");
// p.innerHTML = "hello";
// box.append(p);
