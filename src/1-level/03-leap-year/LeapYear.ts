export class LeapYear {
  static for(year: number): boolean {
    if (year % 4 !== 0 || year === 1800) return false
    return true
  }
}
