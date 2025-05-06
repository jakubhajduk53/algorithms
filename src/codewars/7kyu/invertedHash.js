//https://www.codewars.com/kata/5b5604e26dc79e6832000101

function invertHash(hash) {
  const invertedHash = {};
  for (const [key, value] of Object.entries(hash)) {
    invertedHash[value] = key;
  }
  return invertedHash;
}
