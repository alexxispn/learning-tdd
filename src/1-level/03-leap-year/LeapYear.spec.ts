import { describe, expect, it } from "vitest";
import { LeapYear } from "./LeapYear.js";

// 1997 -> false (not divisible by 4)
// 1996 -> true (divisible by 4)
// 1600 -> true (divisible by 400)
// 1800 -> false (divisible by 4, divisible by 100, NOT divisible by 400)

describe("LeapYear", () => {
  it("is true for year 1996", () => {
    expect(LeapYear.for(1996)).toBe(true);
  });

  describe("false when is not multiple of 4", () => {
    it.each([
      3,
      1997,
      1999
    ])("year %i", (year) => {
      expect(LeapYear.for(year)).toBe(false);
    });
  });

  describe("false when is multiple of 100 but not 400", () => {
    it.each([
      1800,
      1900,
      2100
    ])("year %i", (year) => {
      expect(LeapYear.for(year)).toBe(false)
    })
  })
});
