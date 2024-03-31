export class FizzBuzz {

  static convert(integer: number): string {
    if (integer % 3 === 0) {
      return "Fizz"
    }
    return String(integer)
  }
}
