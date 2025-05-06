//https://www.codewars.com/kata/63b84f54693cb10065687ae5

function createBox(m, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      const top = i;
      const bottom = n - 1 - i;
      const left = j;
      const right = m - 1 - j;
      const layer = Math.min(top, bottom, left, right) + 1;
      row.push(layer);
    }
    result.push(row);
  }

  return result;
}
