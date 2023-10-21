const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scorePoints = [];

for (let eachStudentPoints of players){
    scorePoints.push(eachStudentPoints.scorePoints);
}

let maxScorePoints = Math.max(...scorePoints);
console.log(maxScorePoints);