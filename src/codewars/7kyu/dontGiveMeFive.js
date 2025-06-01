//https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
  let counter = 0;
  while (start <= end) {
    if (!start.toString().includes("5")) counter++;
    start++;
  }
  return counter;
}
