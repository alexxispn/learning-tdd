export class StringCalculator {
  static readonly INVALID_INPUT_ERROR_MESSAGE = "Invalid input"

  add(text: string): number {
    const extractedValues = this.extractValues(text)
    const numbers = this.parseToNumbers(extractedValues)
    return this.sumNumbers(numbers)
  }

  private sumNumbers(extractedNumbers: number[]): number {
    return extractedNumbers.reduce((sum, number) => sum + number, 0)
  }

  private extractValues(text: string): string[] {
    const defaultDelimiters = [",", "\n"]
    const hasCustomDelimiter = text.startsWith("//")
    const delimiters = hasCustomDelimiter ? [text[2], ...defaultDelimiters] : defaultDelimiters
    const values = hasCustomDelimiter ? text.slice(4) : text
    const regex = new RegExp(`[${delimiters.join()}]`)
    return values.split(regex)
  }

  private parseToNumbers(values: string[]): number[] {
    if (values.some((value) => isNaN(Number(value)))) {
      throw new Error(StringCalculator.INVALID_INPUT_ERROR_MESSAGE)
    }
    return values.map(Number)
  }
}
