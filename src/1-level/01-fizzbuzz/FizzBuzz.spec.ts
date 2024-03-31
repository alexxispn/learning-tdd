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
  ])("convert %s to '%s'", (input, expected) => {
    expect(FizzBuzz.convert(input)).toBe(expected)
  })

  it.each([
    3,
    6,
    9
  ])("convert %s to 'Fizz'", (input) => {
    expect(FizzBuzz.convert(input)).toBe("Fizz")
  })

  it.each([
    5,
    10,
    20
  ])("convert %s to 'Buzz'", (input) => {
    expect(FizzBuzz.convert(input)).toBe("Buzz")
  })

  it("converts 15 to 'FizzBuzz'", () => {
    expect(FizzBuzz.convert(15)).toBe("FizzBuzz")
  })
})
