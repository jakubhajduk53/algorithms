//https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  return Number(`0b${arr.join("")}`);
};

const binaryArrayToNumber2 = (arr) => parseInt(arr.join(""), 2);
