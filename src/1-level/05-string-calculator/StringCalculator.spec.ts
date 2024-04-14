import { describe, expect, it } from "vitest"
import { StringCalculator } from "./StringCalculator.js"

// ""       ->    0     -> no numbers   ->  0
// "4"      ->    4     -> one number   ->  the number
// "1, 2"   ->    3     -> two numbers  ->  the sum
describe("StringCalculator", () => {
  it("adds 0 when it doesn't receive any numbers", () => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add("")

    expect(sum).toBe(0)
  })

  it("adds the number when it receives one number", () => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add("4")

    expect(sum).toBe(4)
  })
})
