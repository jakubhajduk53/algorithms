const removeDuplicates = (arr) => {
  const set = new Set();
  for (let item of arr) {
    set.add(item);
  }
  return Array.from(set);
};
