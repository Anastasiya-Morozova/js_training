const congratBestStudent = require("./maxScore");

describe("Parameterized tests for congratBestStudent func", () => {
  it.each([
    [
      //Positive case with all date values are valid
      [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Dmitry", score: 25, date: "2022-10-12" },
        { name: "Denis", score: 0, date: "2022-10-02" },
        { name: "Vadimyr", score: 1, date: "2022-10-11" },
      ],
      "Success",
    ],
    [
      //Positive case where some of date values are invalid
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ],
      "Success",
    ],
    [
      //Positive case where two or more best score students passed their works at the same earliest date
      [
        { name: "Ivan", score: 35, date: "2022-10-01" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-01" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ],
      "Success",
    ],
    [
      //Positive case where some of score values are undefined
      [
        { name: "Stepan", score: undefined, date: "2022-10-01" },
        { name: "Oleg", score: undefined, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ],
      "Success",
    ],
    [
      //Positive case where some of score values are equal to ""
      [
        { name: "Stepan", score: "", date: "2022-10-01" },
        { name: "Oleg", score: "", date: "2022-10-01" },
        { name: "Zanna", score: 58, date: "2022-10-11" },
      ],
      "Success",
    ],
    [
      //Negative case where all date values are equal to undefined
      [
        { name: "Margo", score: 0, date: undefined },
        { name: "Natalia", score: 25, date: undefined },
        { name: "Marina", score: 25, date: undefined },
      ],
      "Fail",
    ],
    [
      //Negative case where all date values are equal to ""
      [
        { name: "Margo", score: 0, date: "" },
        { name: "Natalia", score: 25, date: "" },
        { name: "Marina", score: 25, date: "" },
      ],
      "Fail",
    ],
    [
      //Negative case where all score values are equal to ""
      [
        { name: "Stepan", score: "", date: "2022-10-01" },
        { name: "Oleg", score: "", date: "2022-10-01" },
        { name: "Zanna", score: "", date: "2022-10-11" },
      ],
      "Fail",
    ],[
        //Negative case where all score values are equal to undefined
        [
            { name: "Stepan", score: undefined, date: "2022-10-01" },
            { name: "Oleg", score: undefined, date: "2022-10-01" },
            { name: "Zanna", score: undefined, date: "2022-10-11" },
        ],
        "Fail",
      ],
  ])("Input value %p expected output is: %p", (a, result) => {
    expect(congratBestStudent(a)).toEqual(result);
  });
});
