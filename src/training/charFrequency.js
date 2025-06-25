const charFrequency = (chars) => {
  const map = new Map();
  for (let char of chars) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  return Array.from(map);
};
