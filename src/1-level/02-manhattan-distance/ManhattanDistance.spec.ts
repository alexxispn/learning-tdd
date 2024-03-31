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
      { origin: { x: 0, y: 0 }, destination: { x: 0, y: 1 }, expected: 1 },
      { origin: { x: 0, y: 0 }, destination: { x: 1, y: 0 }, expected: 1 },
      { origin: { x: 1, y: 1 }, destination: { x: 1, y: 0 }, expected: 1 },
      { origin: { x: 0, y: 0 }, destination: { x: 1, y: 1 }, expected: 2 },
      { origin: { x: 1, y: 1 }, destination: { x: 0, y: 0 }, expected: 2 },
      { origin: { x: 0, y: 0 }, destination: { x: 2, y: 2 }, expected: 4 },
      { origin: { x: 2, y: 2 }, destination: { x: 0, y: 0 }, expected: 4 },
      { origin: { x: 0, y: 0 }, destination: { x: 2, y: 3 }, expected: 5 },
      { origin: { x: 2, y: 3 }, destination: { x: 0, y: 0 }, expected: 5 },
      { origin: { x: 0, y: 0 }, destination: { x: 3, y: 2 }, expected: 5 },
      { origin: { x: 3, y: 2 }, destination: { x: 0, y: 0 }, expected: 5 }
    ])("is %i between two points on the same axis", ({ origin, destination, expected }) => {
      const originPoint = Point.at(origin.x, origin.y);
      const destinationPoint = Point.at(destination.x, destination.y);

      const manhattanDistance = ManhattanDistance.between(originPoint, destinationPoint);

      expect(manhattanDistance).toBe(expected);
    });
  });
});
