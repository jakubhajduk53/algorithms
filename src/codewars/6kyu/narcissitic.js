//https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  const powValue = value.toString().length;
  const arr = Array.from(String(value), Number);
  return arr.reduce((acc, val) => acc + Math.pow(val, powValue), 0) === value;
}
