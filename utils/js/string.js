export function toUpper(str) {
  return str.toUpperCase();
}

export function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}

export function customToUppercase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charCode = char.charCodeAt(0);

    if (charCode >= 92 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += char;
    }
  }
  return result;
}
