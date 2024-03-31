import { describe, expect, it } from "vitest";
import { FizzBuzz } from "./FizzBuzz.js";

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

  it.each([
    15,
    30,
    45
  ])("convert %s to 'FizzBuzz'", (input) => {
    expect(FizzBuzz.convert(input)).toBe("FizzBuzz")
  })
})
