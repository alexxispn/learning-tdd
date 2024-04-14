import { NegativeNumbersNotAllowedError } from "./NegativeNumbersNotAllowedError.js"

export class StringCalculator {
  add(text: string): number {
    const customDelimiter = this.extractCustomDelimiter(text)
    const textWithoutCustomDelimiterPart = this.removeCustomDelimiterPart(text, customDelimiter)
    const extractedValues = this.extractValues(textWithoutCustomDelimiterPart, customDelimiter)
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

  private extractValues(text: string, customDelimiter: string): string[] {
    const delimiters = [",", "\n", customDelimiter]
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`)
    return text.split(delimiterRegex)
  }

  private extractCustomDelimiter(text: string) {
    return text.startsWith("//") ? text[2] : ""
  }

  private removeCustomDelimiterPart = (text: string, customDelimiter: string) => {
    if (customDelimiter) {
      const customDelimiterPart = text.slice(0, 4)
      text = text.slice(customDelimiterPart.length)
    }
    return text
  }
}
