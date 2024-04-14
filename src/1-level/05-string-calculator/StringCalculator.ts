export class StringCalculator {
  add(numbers: string): number {
    const extractedNumbers = this.extractNumbers(numbers)
    return extractedNumbers.reduce((sum, number) => sum + number, 0)
  }

  private extractNumbers(numbers: string) {
    return numbers.split(",").map(Number)
  }
}
