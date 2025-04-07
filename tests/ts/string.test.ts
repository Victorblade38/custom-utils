import { describe, test, expect } from "vitest";
import {
  toUpper,
  isPalindrome,
  customToUppercase,
  customToLowercase,
} from "../../utils/ts/string";

describe("String Utilities (TS)", () => {
  test("toUpper should convert string to uppercase", () => {
    expect(toUpper("hello")).toBe("HELLO");
  });

  test("toUpper should convert string to uppercase", () => {
    expect(customToUppercase("hello")).toBe("HELLO");
  });

  test("toLower should convert string to lowercase", () => {
    expect(customToLowercase("HEllo")).toBe("hello");
  });

  test("isPalindrome should check if a string is a palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});
