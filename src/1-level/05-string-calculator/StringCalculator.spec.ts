import { describe, expect, it } from "vitest"

// ""       ->    0     -> no numbers   ->  0
// "4"      ->    4     -> one number   ->  the number
class StringCalculator {
  add(numbers: string) {}
}

// "1, 2"   ->    3     -> two numbers  ->  the sum
describe("StringCalculator", () => {
  it("sum 0 for empty string", () => {
    const stringCalculator = new StringCalculator()

    const sum = stringCalculator.add("")

    expect(sum).toBe(0)
  })
})
