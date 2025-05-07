//https://www.codewars.com/kata/565b9d6f8139573819000056

function decode(message) {
  return message
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        const mirroredCode = 122 - (charCode - 97);
        return String.fromCharCode(mirroredCode);
      }
      return char;
    })
    .join("");
}
