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
console.log(lck);
// const tbody = document.getElementById("tbody");

// tbody.append(lckteam.teams[0].rank);
// tbody.append(lckteam.teams[0].name) + "tr";
// tbody.append(lckteam.teams[0].wins);
// tbody.append(lckteam.teams[0].loses);
// tbody.append(lckteam.teams[0].difference);

// tbody.append(lckteam.teams[0].kill);
// tbody.append(lckteam.teams[0].death);
// tbody.append(lckteam.teams[0].assist);

// for (let i = 0; i < lckteam.teams.length; i++) {}
