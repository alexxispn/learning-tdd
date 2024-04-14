import { NegativeNumbersNotAllowedError } from "./NegativeNumbersNotAllowedError.js"

export class StringCalculator {
  private static readonly defaultDelimiters = [",", "\n"]

  add(text: string): number {
    const delimiters = this.getDelimiters(text)
    const extractedValues = this.extractValues(text, delimiters)
    const numbers = this.parseToNumbers(extractedValues)
    const validNumbers = this.removeNumbersGreaterThan1000(numbers)
    return this.sumNumbers(validNumbers)
  }

  private sumNumbers(extractedNumbers: number[]): number {
    return extractedNumbers.reduce((sum, number) => sum + number, 0)
  }

  private removeNumbersGreaterThan1000(numbers: number[]): number[] {
    return numbers.filter((number) => number <= 1000)
  }

  private parseToNumbers(values: string[]): number[] {
    this.ensureHasNoNegativeNumbers(values)
    return values.map(Number).filter((number) => !isNaN(number))
  }

  private ensureHasNoNegativeNumbers(values: string[]): void {
    const negativeNumbers = values.map(Number).filter((number) => number < 0)
    if (negativeNumbers.length) {
      throw new NegativeNumbersNotAllowedError(negativeNumbers)
    }
  }

  private extractValues(text: string, customDelimiter: string[]): string[] {
    const delimiters = [",", "\n", ...customDelimiter]
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`)
    return text.split(delimiterRegex)
  }

  private getDelimiters(text: string) {
    const hasCustomDelimiter = text.startsWith("//")
    return hasCustomDelimiter ? this.extractCustomDelimiter(text) : StringCalculator.defaultDelimiters
  }

  private extractCustomDelimiter(text: string): string[] {
    const endOfDelimitersIndex = text.indexOf("\n")
    const delimiterFragment = text.substring(2, endOfDelimitersIndex)

    if (delimiterFragment.startsWith("[")) {
      return this.extractMultipleDelimiters(delimiterFragment)
    }

    return [delimiterFragment]
  }

  private extractMultipleDelimiters(delimiterFragment: string) {
    return delimiterFragment.substring(1, delimiterFragment.length - 1).split("][")
  }
}
