const firstUniqueChar = (arr) => {
  const map = new Map();

  for (let val of arr) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  for (let val of arr) {
    if (map.get(val) === 1) return val;
  }
  return null;
};
