const getDivisors = (n) => {
  let result = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      result += i * i === n ? 1 : 2;
    }
  }
  return result;
};
