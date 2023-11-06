const calculateBonus = require("./index");

describe("Test suite for calculateBonus funs", () => {
  it("Sum of params is equal to 50", () => {
    expect(calculateBonus(10, 40)).toBe(50);
  });

  it("Boundary value 49", () => {
    expect(calculateBonus(40, 9)).toBe(49);
  });

  it("Boundary value 51", () => {
    expect(calculateBonus(50, 1)).toBe(50);
  });

  it("One parameter is negative but the sum does not exceed the bonus limit", () => {
    expect(calculateBonus(-1, 1)).toBe(0);
  });

  it("Sum is negative", () => {
    expect(calculateBonus(-20, -10)).toBe(-30);
  });

  it("One param is equal 0", () => {
    expect(calculateBonus(20, 0)).toBe(20);
  });
});
