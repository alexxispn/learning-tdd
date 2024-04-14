import { describe, expect, it } from "vitest"
import { StringCalculator } from "./StringCalculator.js"

// ""       ->    0     -> no numbers   ->  0
// "4"      ->    4     -> one number   ->  the number
// "1, 2"   ->    3     -> two numbers  ->  the sum
describe("StringCalculator", () => {
  it.each(["", " ", "  ", "   ", "    "])("adds 0 when it receives an empty string", (numbers) => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add(numbers)

    expect(sum).toBe(0)
  })

  it.each(["a", "%", "!", "a, b", "a, b, c", "a, b, c, d"])(
    "throws an error when it receives invalid input",
    (numbers) => {
      const stringCalculator = new StringCalculator()

      expect(() => stringCalculator.add(numbers)).toThrowError(StringCalculator.INVALID_INPUT_ERROR_MESSAGE)
    },
  )

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
})
