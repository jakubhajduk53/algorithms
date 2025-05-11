//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  return str
    .split(/(\s+)/)
    .map((x) => (x.trim() ? x.split("").reverse().join("") : x))
    .join("");
}
