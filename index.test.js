
// describe("Test suite for calculateBonus funs", () => {
//   it("Sum of params is equal to 50", () => {
//     expect(calculateBonus(10, 40)).toBe(50);
//   });

//   it("Boundary value 49", () => {
//     expect(calculateBonus(40, 9)).toBe(49);
//   });

//   it("Boundary value 51", () => {
//     expect(calculateBonus(50, 1)).toBe(50);
//   });

//   it("One parameter is negative but the sum does not exceed the bonus limit", () => {
//     expect(calculateBonus(-1, 1)).toBe(0);
//   });

//   it("Sum is negative", () => {
//     expect(calculateBonus(-20, -10)).toBe(-30);
//   });

//   it("One param is equal 0", () => {
//     expect(calculateBonus(20, 0)).toBe(20);
//   });
// });
const calculateBonus = require("./index");

describe("Parameterized tests for calculateBonus func", () =>{
  it.each([
    [10,40,50], //Sum of params is equal to 50
    [40,9,49], //Boundary value 49
    [50,1,50], //Boundary value 51
    [-1,1,0], //One parameter is negative but the sum does not exceed the bonus limit
    [-20,-10,-30], //Sum is negative
    [20,0,20]  //One param is equal 0
  ])("Input values [%p,%p] expected output is: %p",(a,b, result) =>{
    expect(calculateBonus(a,b)).toEqual(result)
  })
})