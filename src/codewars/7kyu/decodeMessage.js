//https://www.codewars.com/kata/565b9d6f8139573819000056

function decode(message) {
  return message
    .split("")
    .map((e) => {
      if (e === "") return "";
      const code = e.charCodeAt(0);
      const mirroredCode = 122 - (code - 97);
      return String.fromCharCode(mirroredCode);
    })
    .join("");
}
