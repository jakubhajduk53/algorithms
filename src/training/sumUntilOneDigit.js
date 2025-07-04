const sumUntilOneDigit = (n) => {
  if (n < 10) return n;
  return sumUntilOneDigit(
    n
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0)
  );
};
