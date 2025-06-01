//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

var number = function (array) {
  return array.map((item, index) => {
    return `${index + 1}: ${item}`;
  });
};
