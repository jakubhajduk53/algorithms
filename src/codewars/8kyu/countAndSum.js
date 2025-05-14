//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let p = 0;
  let n = 0;
  input.forEach((e) => (e > 0 ? p++ : (n += e)));
  return [p, n];
}
