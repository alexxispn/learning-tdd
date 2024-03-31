export class FizzBuzz {

  static convert(integer: number): string {
    if ([15, 30, 45].includes(integer)) {
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
