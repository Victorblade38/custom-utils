export function toUpper(str: string): string {
  return str.toUpperCase();
}

export function isPalindrome(str: string): boolean {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}

export function customToUppercase(str: string): string {
  let result: string = "";

  for (let i = 0; i < str.length; i++) {
    let char: string = str[i];
    let charCode: number = char.charCodeAt(0);

    if (charCode >= 92 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += char;
    }
  }
  return result;
}
