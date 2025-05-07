//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
  return data.map((x) => {
    return x[0] >= 55 && x[1] > 7 ? "Senior" : "Open";
  });
}
