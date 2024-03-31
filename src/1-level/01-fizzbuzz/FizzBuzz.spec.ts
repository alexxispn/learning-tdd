import { describe, expect, it } from "vitest";
import { FizzBuzz } from "./FizzBuzz.js";

// Input  ->    Output
// 1      ->    "1"
// 2      ->    "2"
// 3      ->    "Fizz"
// 4      ->    "4"
// 5      ->    "Buzz"
// 6      ->    "Fizz"
// 7      ->    "7"
// 8      ->    "8"
// 9      ->    "Fizz"
// 10     ->    "Buzz"
// 11     ->    "11"
// 12     ->    "Fizz"
// 13     ->    "13"
// 14     ->    "14"
// 15     ->    "FizzBuzz"

describe("FizzBuzz", () => {
  it.each([
    [1, "1"],
    [2, "2"],
    [4, "4"]
  ])("convert %s to %s", (input, expected) => {
    expect(FizzBuzz.convert(input)).toBe(expected)
  })

  it("convert 3 to 'Fizz'", () => {
    expect(FizzBuzz.convert(3)).toBe("Fizz")
  })

  it("convert 6 to 'Fizz'", () => {
    expect(FizzBuzz.convert(6)).toBe("Fizz")
  })

  it("convert 9 to 'Fizz'", () => {
    expect(FizzBuzz.convert(9)).toBe("Fizz")
  })
})
