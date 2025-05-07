//https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  return Number.isInteger(Math.pow(Math.sqrt(sq) + 1, 2))
    ? Math.pow(Math.sqrt(sq) + 1, 2)
    : -1;
}
