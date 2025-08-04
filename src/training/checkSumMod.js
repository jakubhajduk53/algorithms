const checkSumMod = (digits) => {
  const weights = [1, 3, 7, 8, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += digits[i] * weights[i];
  }
  return (10 - (sum % 10)) % 10;
};
