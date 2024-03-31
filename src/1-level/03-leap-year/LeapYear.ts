export class LeapYear {
  static for(year: number): boolean {
    if (year % 4 !== 0) return false
    return true
  }
}
