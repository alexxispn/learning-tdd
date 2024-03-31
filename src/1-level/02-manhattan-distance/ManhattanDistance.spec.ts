import { describe, expect, it } from "vitest";
import { ManhattanDistance } from "./ManhattanDistance.js";
import { Point } from "./Point.js";

// {0, 0} -> {0, 0} = 0
// {1, 1} -> {1, 1} = 0
// {2, 2} -> {2, 2} = 0
// {0, 0} -> {0, 1} = 1
// {0, 0} -> {1, 0} = 1
// {1, 1} -> {1, 0} = 1
// {0, 0} -> {1, 1} = 2
// {1, 1} -> {0, 0} = 2
// {0, 0} -> {2, 2} = 4
// {2, 2} -> {0, 0} = 4
// {0, 0} -> {2, 3} = 5
// {2, 3} -> {0, 0} = 5

describe("ManhattanDistance", () => {
  it("is 0 between two points at the same location", () => {
    const origin = Point.at(0, 0);
    const destination = Point.at(0, 0);

    const manhattanDistance = ManhattanDistance.between(origin, destination)

    expect(manhattanDistance).toBe(0);
  });
})
