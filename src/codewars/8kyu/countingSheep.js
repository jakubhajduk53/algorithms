//https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
  return sheep.reduce((acc, val) => (val === true ? acc + 1 : acc), 0);
}
