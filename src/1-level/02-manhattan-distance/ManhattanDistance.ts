import { Point } from "./Point.js";

export class ManhattanDistance {
  static between(origin: Point, destination: Point) : number {
    return Math.abs(origin.xAxisDifferenceFrom(destination)) + Math.abs(origin.yAxisDifferenceFrom(destination));
  }
}
