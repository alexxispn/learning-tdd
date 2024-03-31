import { describe, expect, it } from "vitest";
import { FizzBuzz } from "./FizzBuzz.js";

describe("FizzBuzz converts integers", () => {
  describe("not multiples of 3 or 5 into string", () => {
    it.each([
      [1, "1"],
      [2, "2"],
      [4, "4"]
    ])("%s to '%s'", (input, expected) => {
      expect(FizzBuzz.convert(input)).toBe(expected)
    })
  })

  describe("multiples of 3 and not 5 into 'Fizz'", () => {
    it.each([
      3,
      6,
      9
    ])("%s to 'Fizz'", (input) => {
      expect(FizzBuzz.convert(input)).toBe("Fizz")
    })
  })

  describe("multiples of 5 and not 3 into 'Buzz'", () => {
    it.each([
      5,
      10,
      20
    ])("%s to 'Buzz'", (input) => {
      expect(FizzBuzz.convert(input)).toBe("Buzz")
    })
  })

  describe("multiples of 3 and 5 into 'FizzBuzz'", () => {
    it.each([
      15,
      30,
      45
    ])("%s to 'FizzBuzz'", (input) => {
      expect(FizzBuzz.convert(input)).toBe("FizzBuzz")
    })
  })
})
