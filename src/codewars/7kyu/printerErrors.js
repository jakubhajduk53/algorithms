//https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  const good = s.match(/[a-m]/g);
  return `${s.length - good.length}/${s.length}`;
}
