//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  return numbers.length
    ? numbers.filter((_, x) => x !== numbers.indexOf(Math.min(...numbers)))
    : [];
}
