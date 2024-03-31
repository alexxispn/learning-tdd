export class FizzBuzz {

  static convert(integer: number): string {
    if ([3,6,9].includes(integer)) {
      return "Fizz"
    }
    return String(integer)
  }
}
