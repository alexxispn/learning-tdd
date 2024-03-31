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
  it("convert 1 to string", () => {
    const fizzBuzz = new FizzBuzz()

    const converted = fizzBuzz.convert(1)

    expect(converted).toBe("1")
  })

  it("convert 2 to string", () => {
    const fizzBuzz = new FizzBuzz()

    const converted = fizzBuzz.convert(2)

    expect(converted).toBe("2")
  })

  it("convert 4 to string", () => {
    const fizzBuzz = new FizzBuzz()

    const converted = fizzBuzz.convert(4)

    expect(converted).toBe("4")
  })
})
