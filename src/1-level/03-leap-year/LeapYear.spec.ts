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

  it("is false for year 1800", () => {
    expect(LeapYear.for(1800)).toBe(false);
  });

  it("is false for year 1900", () => {
    expect(LeapYear.for(1900)).toBe(false);
  });

  it("is false for year 2100", () => {
    expect(LeapYear.for(2100)).toBe(false);
  });
});
