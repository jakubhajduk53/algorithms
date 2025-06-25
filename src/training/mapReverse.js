const mapReverse = (mapToReverse) => {
  const map = new Map();
  for (const [key, value] of mapToReverse.entries()) {
    if (!map.has(value)) {
      map.set(value, []);
    }
    map.get(value).push(key);
  }

  return map;
};
