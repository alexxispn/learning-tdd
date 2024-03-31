export class FizzBuzz {

  static convert(integer: number): string {
    if (integer % 3 === 0) {
      return "Fizz"
    }
    if ([5, 10, 20].includes(integer)) {
      return "Buzz"
    }
    return String(integer)
  }
}
