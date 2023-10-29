const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; //variable "bonus" is undefined and the "sum" is equal the sum of args a and b
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //if "sum" is greater than 50 then "bonus" is equal to 50 otherwise it is equal to the "sum"
  return bonus;
};

calculateBonus(3, 4);