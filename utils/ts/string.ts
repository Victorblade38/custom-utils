export function toUpper(str: string): string {
    return str.toUpperCase();
  }
  
  export function isPalindrome(str: string): boolean {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
  }
  