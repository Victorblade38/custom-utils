import { describe, test, expect } from "vitest";
import {
  toUpper,
  isPalindrome,
  customToUppercase,
  customToLowercase,
} from "../../utils/js/string.js";

describe("String Utilities (JS)", () => {
  test("toUpper should convert string to uppercase", () => {
    expect(toUpper("hello")).toBe("HELLO");
  });

  test("customUppercase should convert string to uppercase", () => {
    expect(customToUppercase("internship")).toBe("INTERNSHIP");
  });

  test("customLowercase should convert string to lowercase", () => {
    expect(customToLowercase("INTERnship")).toBe("internship");
  });

  test("isPalindrome should check if a string is a palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});
