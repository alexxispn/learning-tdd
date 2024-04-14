export class StringCalculator {
  static readonly INVALID_INPUT_ERROR_MESSAGE = "Invalid input"

  add(numbers: string): number {
    return this.sumNumbers(this.extractNumbers(numbers))
  }

  private sumNumbers(extractedNumbers: number[]) {
    return extractedNumbers.reduce((sum, number) => sum + number, 0)
  }

  private extractNumbers(numbers: string) {
    return numbers.split(",").map((number) => {
      const parsedNumber = Number(number)
      if (isNaN(parsedNumber)) {
        throw new Error(StringCalculator.INVALID_INPUT_ERROR_MESSAGE)
      }
      return parsedNumber
    })
  }
}
