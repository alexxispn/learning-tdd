import { describe, expect, it } from "vitest";

// 1997 -> false (not divisible by 4)
// 1996 -> true (divisible by 4)
// 1600 -> true (divisible by 400)
// 1800 -> false (divisible by 4, divisible by 100, NOT divisible by 400)

describe("LeapYear", ()=> {
  it("should return true", () => {
    expect(true).toBe(true)
  });
})
