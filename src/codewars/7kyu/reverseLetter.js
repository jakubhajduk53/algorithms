//https://www.codewars.com/kata/58b8c94b7df3f116eb00005

function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-zA-Z]/g, "");
}
