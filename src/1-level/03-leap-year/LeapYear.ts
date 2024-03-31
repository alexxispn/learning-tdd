export class LeapYear {
  static for(year: number): boolean {
    const isMultipleOf4 = year % 4 === 0;
    const isMultipleOf100 = year % 100 === 0;

    return isMultipleOf4 && !isMultipleOf100
  }
}
