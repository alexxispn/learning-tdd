import { describe, expect, it } from "vitest"
import { StringCalculator } from "./StringCalculator.js"
import { NegativeNumbersNotAllowedError } from "./NegativeNumbersNotAllowedError.js"

describe("StringCalculator", () => {
  it.each(["", " ", "  ", "   ", "    "])("adds 0 when it receives an empty string", (numbers) => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add(numbers)

    expect(sum).toBe(0)
  })

  it.each(["1", "2", "3", "4", "5", "6", "7", "8", "9"])("adds the number when it receives one number", (number) => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add(number)

    expect(sum).toBe(Number(number))
  })

  it.each([
    ["1", "2", 3],
    ["3", "4", 7],
    ["5", "6", 11],
    ["7", "8", 15],
    ["9", "10", 19],
  ])("adds the sum when it receives two numbers", (firstNumber, secondNumber, expectedSum) => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add(`${firstNumber}, ${secondNumber}`)

    expect(sum).toBe(expectedSum)
  })

  it("adds the sum when it receives multiple numbers", () => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add("1, 2, 3, 4, 5, 6, 7, 8, 9")

    expect(sum).toBe(45)
  })

  it("adds the sum when numbers are separated by a new line or a comma", () => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add("1\n2,3")

    expect(sum).toBe(6)
  })

  it.each(["//;\n1;2", "//-\n1-2", "//.\n1.2", "//,\n1,2", "//®\n1®®2"])(
    "adds the sum when numbers are separated by a custom delimiter",
    (numbers) => {
      const stringCalculator = new StringCalculator()

      const sum = stringCalculator.add(numbers)

      expect(sum).toBe(3)
    },
  )

  it("throws if receive negative numbers", () => {
    const stringCalculator = new StringCalculator()

    expect(() => stringCalculator.add("1, -2, -3")).toThrowError(new NegativeNumbersNotAllowedError([-2, -3]))
  })

  it.each(["a", "%", "!", "a, b", "a, b, c", "a, b, c, d"])("ignores non-numeric values", (numbers) => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add(numbers)

    expect(sum).toBe(0)
  })
})
