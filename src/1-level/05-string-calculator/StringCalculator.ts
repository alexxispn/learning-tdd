export class StringCalculator {
  add(numbers: string): number {
    return this.sumNumbers(this.extractNumbers(numbers))
  }

  private sumNumbers(extractedNumbers: number[]) {
    return extractedNumbers.reduce((sum, number) => sum + number, 0)
  }

  private extractNumbers(numbers: string) {
    return numbers.split(",").map(Number)
  }
}
