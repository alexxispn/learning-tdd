export class StringCalculator {
  add(numbers: string): number {
    const numbersArray: number[] = numbers.split(",").map(Number)
    return numbersArray.reduce((sum, number) => sum + number, 0)
  }
}
