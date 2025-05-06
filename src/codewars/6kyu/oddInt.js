//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const arr = [];
  const fill = (item) => {
    if (arr.find((el) => el.value === item)) {
      arr.find((el) => el.value === item).counter++;
    } else {
      arr.push({ value: item, counter: 1 });
    }
  };
  A.map(fill);

  return arr.filter((x) => x.counter % 2 === 1)[0].value;
}
