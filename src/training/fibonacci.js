const fib = (n) => {
  if (n < 0) return false;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let x = 0;
  let y = 1;
  let z;
  for (let i = 2; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  return z;
};
