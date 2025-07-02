const isValidBrackets = (str) => {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of str) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
};
