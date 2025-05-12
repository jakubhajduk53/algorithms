//https://www.codewars.com/kata/52dbae61ca039685460001ae/

function change(string) {
  let output = Array(26).fill("0");
  string
    .toLowerCase()
    .split("")
    .forEach((e) => {
      const code = e.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        output[code - 97] = "1";
      }
    });
  return output.join("");
}
