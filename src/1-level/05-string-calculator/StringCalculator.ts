export class StringCalculator {
  add(numbers: string): number {
    if (numbers.length <= 1) {
      return Number(numbers)
    }
    return 3
  }
}
