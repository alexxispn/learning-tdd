export class FizzBuzz {

  static convert(integer: number): string {
    if (integer % 15 === 0) {
      return "FizzBuzz"
    }
    if (integer % 3 === 0) {
      return "Fizz"
    }
    if (integer % 5 === 0) {
      return "Buzz"
    }
    return String(integer)
  }
}
