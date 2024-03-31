export class LeapYear {
  static for(year: number): boolean {
    const isMultipleOf4 = year % 4 === 0;
    const isMultipleOf100 = year % 100 === 0;
    const isMultipleOf400 = year % 400 === 0;

    return isMultipleOf4 && (isMultipleOf400 || !isMultipleOf100);
  }
}
