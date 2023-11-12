let testArray = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

//testArray.forEach(congratBestStudent);
function congratBestStudent(arr) {
  let maxScore = 0;
  arr.forEach((element) => {
    if (
      element.score !== 0 &&
      element.score > maxScore &&
      element.score !== undefined
    ) {
      maxScore = element.score;
    }
  });

  if (maxScore === 0 || maxScore === undefined) {
    console.log("No valid data");
    return "Fail";
  }

  let earliestDate;
  arr.forEach((element) => {
    if (!element.date || element.score !== maxScore) {
      return;
    } else if (earliestDate === undefined || (earliestDate > element.date && element.score == maxScore)) {
      earliestDate = element.date;
    }
  });

  let names_arr = [];
  arr.forEach((element) => {
    if (element.date !== undefined && element.date === earliestDate && element.score == maxScore) {
      names_arr.push(element.name);
    }
  });

  if (names_arr.length) {
    console.log(`Congratulations to ${names_arr} as the best student/s!`);
    return "Success";
  } else {
    console.log("No valid data");
    return "Fail";
  }
}
congratBestStudent([ { name: "Stepan", score: "", date: "2022-10-01" },
{ name: "Oleg", score: "", date: "2022-10-01" },
{ name: "Zanna", score: "", date: "2022-10-11" },])
module.exports = congratBestStudent;
