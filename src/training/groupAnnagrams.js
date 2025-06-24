const groupAnnagram = (arr) => {
  const map = new Map();

  for (let word of arr) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return Array.from(map.values());
};
