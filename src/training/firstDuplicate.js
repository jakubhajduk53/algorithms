const firstDuplicate = (arr) => {
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) return arr[i];
    seen.set(arr[i], true);
  }
  return null;
};

console.log(firstDuplicate([2, 5, 3, 5, 1]));
