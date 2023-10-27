let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
    expectedAmount: 40590,
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
    expectedAmount: 148200,
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
    expectedAmount: 25709,
  },
];

//let's calculate sum of expenses which were more than 1000
function sumExpenses(arr) {
  return arr.reduce((sum, monthExpenses) => {
    return monthExpenses > 1000 ? sum + monthExpenses : sum;
  }, 0);
}

//test function which compares our actual result from sumExpenses with the expectedAmount
function testAmount(obj) {
  let actualAmount = sumExpenses(obj.yearlyExpences);

  if (actualAmount !== obj.expectedAmount) {
    console.error("Wrong calculations");
    return;
  } else {
    console.log("Everything is correct");
  }
}

expencesExamples.forEach(testAmount);
