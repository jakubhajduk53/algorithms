const groupByAge = (arr) => {
  const map = new Map();

  for (let { name, age } of arr) {
    if (!map.has(age)) {
      map.set(age, []);
    }
    map.get(age).push(name);
  }
  return Array.from(map);
};
