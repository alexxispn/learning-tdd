import { describe, expect, it } from "vitest";
import { ManhattanDistance } from "./ManhattanDistance.js";
import { Point } from "./Point.js";

describe("ManhattanDistance", () => {
  describe("when the points are at the same location", () => {
    it.each([
      [0, 0],
      [1, 1],
      [2, 2]
    ])("is 0 between two points at the same location", (x, y) => {
      const origin = Point.at(x, y);
      const destination = Point.at(x, y);

      const manhattanDistance = ManhattanDistance.between(origin, destination);

      expect(manhattanDistance).toBe(0);
    });
  });

  describe("when the points are on different locations", () => {
    it.each([
      { originX: 0, originY: 0, destinationX: 0, destinationY: 1, expected: 1 },
      { originX: 0, originY: 0, destinationX: 1, destinationY: 0, expected: 1 },
      { originX: 1, originY: 1, destinationX: 1, destinationY: 0, expected: 1 },
      { originX: 0, originY: 0, destinationX: 1, destinationY: 1, expected: 2 },
      { originX: 1, originY: 1, destinationX: 0, destinationY: 0, expected: 2 },
      { originX: 0, originY: 0, destinationX: 2, destinationY: 2, expected: 4 },
      { originX: 2, originY: 2, destinationX: 0, destinationY: 0, expected: 4 },
      { originX: 0, originY: 0, destinationX: 2, destinationY: 3, expected: 5 },
      { originX: 2, originY: 3, destinationX: 0, destinationY: 0, expected: 5 },
      { originX: 0, originY: 0, destinationX: 3, destinationY: 2, expected: 5 },
      { originX: 3, originY: 2, destinationX: 0, destinationY: 0, expected: 5 }
    ])("calculates the Manhattan distance from ($originX, $originY) to ($destinationX, $destinationY) as $expected", ({ originX, originY, destinationX, destinationY, expected }) => {
      const origin = Point.at(originX, originY);
      const destination = Point.at(destinationX, destinationY);

      const manhattanDistance = ManhattanDistance.between(origin, destination);

      expect(manhattanDistance).toBe(expected);
    })
  })
});
