export class FizzBuzz {

  static convert(integer: number): string {
    if (integer % 3 === 0) {
      return "Fizz"
    }
    if (integer === 5) {
      return "Buzz"
    }
    return String(integer)
  }
}
