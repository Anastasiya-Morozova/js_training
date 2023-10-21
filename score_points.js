//Test dataset "players"
const players = [
  { id: 1, name: "Ivan", scorePoints: 4500 },
  { id: 2, name: "Petr", scorePoints: 3600 },
  { id: 3, name: "Vadim", scorePoints: 3433 },
  { id: 4, name: "Olga", scorePoints: 2356 },
];

//Boundary value of players: test dataset "testData1" when there is no players
const testData1 = [];

//Boundary value of players+1: test dataset "testData2" where number of players is a boundary value(0) plus 1
const testData2 = [{ id: 1, name: "Emily", scorePoints: 1000 }];

//Boundary value of scorePoints(min=0): test dataset "testData3"
const testData3 = [
  { id: 1, name: "Frank", scorePoints: 0 },
  { id: 2, name: "Grace", scorePoints: 567 },
];

//Test dataset "testData4" with big numbers in "scorePoints"
const testData4 = [
  { id: 1, name: "Frank", scorePoints: 100 },
  { id: 2, name: "Grace", scorePoints: Number.MAX_SAFE_INTEGER },
];

//Boundary value of scorePoints(min=0) - 1: test dataset "testData5"
const testData5 = [
  { id: 1, name: "Frank", scorePoints: 2300 },
  { id: 2, name: "Grace", scorePoints: -1 },
];

//Test dataset "testData6" where the "scorePoints" parameter/parameters are negative
const testData6 = [
  { id: 1, name: "Frank", scorePoints: -2300 },
  { id: 2, name: "Grace", scorePoints: -180 },
];

//Test dataset "testData7" where the "scorePoints" parameter in an object/objects is/are missing
const testData7 = [
  { id: 1, name: "Henry" },
  { id: 2, name: "Isabel" },
];

//Test dataset "testData8" where the "scorePoints" parameters are invalid values
const testData8 = [
    { id: 1, name: "Henry", scorePoints: "text"},
    { id: 2, name: "Isabel", scorePoints: null },
    { id: 3, name: "Rem", scorePoints: undefined },
  ];

function countMaxScorePoints(array) {
  let scorePoints = [];

  if (!array.length) {
    console.log("No players yet");
    return;
  }

  for (let eachStudentPoints of array) {
    if (eachStudentPoints.hasOwnProperty("scorePoints") && eachStudentPoints.scorePoints !== null && eachStudentPoints.scorePoints >= 0
    ) {
      scorePoints.push(eachStudentPoints.scorePoints);
    }
  }
  if (!scorePoints.length) {
    console.log("Invalid values");
  } else {
    let maxScorePoints = Math.max(...scorePoints);
    console.log("Max score is: " + maxScorePoints);
    return maxScorePoints;
  }
}

countMaxScorePoints(testData1);
countMaxScorePoints(testData2);
countMaxScorePoints(testData3);
countMaxScorePoints(testData4);
countMaxScorePoints(testData5);
countMaxScorePoints(testData6);
countMaxScorePoints(testData7);
countMaxScorePoints(testData8);