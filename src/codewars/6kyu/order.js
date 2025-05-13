//https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      const A = a.match(/\d/)[0];
      const B = b.match(/\d/)[0];
      return A - B;
    })
    .join(" ");
}
