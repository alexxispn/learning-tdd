import { describe, expect, it } from "vitest";
import { LeapYear } from "./LeapYear.js";

// 1997 -> false (not divisible by 4)
// 1996 -> true (divisible by 4)
// 1600 -> true (divisible by 400)
// 1800 -> false (divisible by 4, divisible by 100, NOT divisible by 400)

describe("LeapYear", ()=> {
  it("is true for year 1996", () => {
    expect(LeapYear.for(1996)).toBe(true);
  });

  it("is false for year 1997", () => {
    expect(LeapYear.for(1997)).toBe(false);
  });
})
