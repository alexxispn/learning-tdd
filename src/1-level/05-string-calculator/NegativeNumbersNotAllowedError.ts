export class NegativeNumbersNotAllowedError extends Error {
  constructor(numbers: number[]) {
    super(`Negatives not allowed: ${numbers.join(", ")}`)
  }
}
