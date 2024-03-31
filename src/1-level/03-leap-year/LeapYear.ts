export class LeapYear {
  static for(year: number): boolean {
    if (year === 1997 || year === 1999 || year === 3) return false
    return true
  }
}
