export class StringCalculator {
  static readonly INVALID_INPUT_ERROR_MESSAGE = "Invalid input"

  add(numbers: string): number {
    return this.sumNumbers(this.extractNumbers(numbers))
  }

  private sumNumbers(extractedNumbers: number[]): number {
    return extractedNumbers.reduce((sum, number) => sum + number, 0)
  }

  private extractNumbers(text: string): number[] {
    const values = text.split(",").flatMap((value) => value.split("\n"))
    return this.parseToNumbers(values)
  }

  private parseToNumbers(values: string[]): number[] {
    return values.map((number) => {
      const parsedNumber = Number(number)
      if (isNaN(parsedNumber)) {
        throw new Error(StringCalculator.INVALID_INPUT_ERROR_MESSAGE)
      }
      return parsedNumber
    })
  }
}
