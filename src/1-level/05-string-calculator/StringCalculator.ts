export class StringCalculator {
  static readonly INVALID_INPUT_ERROR_MESSAGE = "Invalid input"

  add(text: string): number {
    const customDelimiter = this.extractCustomDelimiter(text)
    const extractedValues = this.extractValues(text, customDelimiter)
    const numbers = this.parseToNumbers(extractedValues)
    return this.sumNumbers(numbers)
  }

  private sumNumbers(extractedNumbers: number[]): number {
    return extractedNumbers.reduce((sum, number) => sum + number, 0)
  }

  private parseToNumbers(values: string[]): number[] {
    if (values.some((value) => isNaN(Number(value)))) {
      throw new Error(StringCalculator.INVALID_INPUT_ERROR_MESSAGE)
    }
    return values.map(Number)
  }

  private extractValues(text: string, customDelimiter: string): string[] {
    const delimiters = [",", "\n", customDelimiter]
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`)
    return customDelimiter ? text.slice(4).split(customDelimiter) : text.split(delimiterRegex)
  }

  private extractCustomDelimiter(text: string) {
    return text.startsWith("//") ? text[2] : ""
  }
}
