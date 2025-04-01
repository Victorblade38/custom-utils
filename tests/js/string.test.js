import { describe, test, expect } from "vitest";
import { toUpper, isPalindrome } from "../../utils/js/string.js";

describe("String Utilities (JS)", () => {
  test("toUpper should convert string to uppercase", () => {
    expect(toUpper("hello")).toBe("HELLO");
  });

  test("isPalindrome should check if a string is a palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});
