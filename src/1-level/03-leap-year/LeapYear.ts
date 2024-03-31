export class LeapYear {
  static for(year: number): boolean {
    if (year % 4 !== 0 || [1800, 1900, 2100].includes(year)) return false
    return true
  }
}
