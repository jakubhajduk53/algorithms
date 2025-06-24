const wordCount = (arr) => {
  const map = new Map();

  for (let word of arr) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      map.set(word, map.get(word) + 1);
    }
  }
  return Array.from(map);
};
