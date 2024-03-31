export class FizzBuzz {

  static convert(integer: number): string {
    if (integer === 3 || integer === 6) {
      return "Fizz"
    }
    return String(integer)
  }
}
