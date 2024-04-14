import { NegativeNumbersNotAllowedError } from "./NegativeNumbersNotAllowedError.js"

export class StringCalculator {
  add(text: string): number {
    const customDelimiter = this.extractCustomDelimiter(text)
    const extractedValues = this.extractValues(text, customDelimiter)
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

  private extractCustomDelimiter(text: string) {
    const hasMultipleSingleCharDelimiters = text.includes("[*][%]")
    if (hasMultipleSingleCharDelimiters) return ["*", "%"]
    const hasCustomMultipleCharacterDelimiter = text.startsWith("//[")
    const hasCustomSingleCharacterDelimiter = text.startsWith("//")
    if (hasCustomMultipleCharacterDelimiter) {
      return [text.slice(3, text.indexOf("]"))]
    }
    if (hasCustomSingleCharacterDelimiter) {
      return [text.slice(2, 3)]
    }
    return [""]
  }
}
