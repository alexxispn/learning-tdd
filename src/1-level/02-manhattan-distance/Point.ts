export class Point {
  private readonly xAxis: number;
  private readonly yAxis: number;

  private constructor(xAxis: number, yAxis: number) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
  }

  static at(xAxis: number, yAxis: number): Point {
    return new Point(xAxis, yAxis);
  }

  xAxisDifferenceFrom(anotherPoint: Point) {
    return this.xAxis - anotherPoint.xAxis;
  }

  yAxisDifferenceFrom(anotherPoint: Point) {
    return this.yAxis - anotherPoint.yAxis;
  }
}
