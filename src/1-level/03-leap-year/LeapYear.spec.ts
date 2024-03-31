import { describe, expect, it } from "vitest";
import { LeapYear } from "./LeapYear.js";

describe("LeapYear", () => {
  describe("is true when is multiple of 4", () => {
    it.each([
      1996,
      2000,
      2020
    ])("year %i", (year) => {
      expect(LeapYear.for(year)).toBe(true);
    });
  });

  describe("is true when is multiple of 400", () => {
    it.each([
      1600,
      2000,
      2400
    ])("year %i", (year) => {
      expect(LeapYear.for(year)).toBe(true);
    });
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

  describe("is false when is multiple of 100 but not 400", () => {
    it.each([
      1800,
      1900,
      2100
    ])("year %i", (year) => {
      expect(LeapYear.for(year)).toBe(false);
    });
  });
});
