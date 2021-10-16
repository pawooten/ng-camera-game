/**
 * Describes a Color, composed of r, g, b components.
 */
export class Color {
  constructor(
    public readonly r: number,
    public readonly g: number,
    public readonly b: number
  ) {}

  /**
   * @returns Converts to a string "rgb(?,?,?)"
   */
  toRgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  /**
   * When object is included in console.log it will output rgb value
   */
  toString() {
    return this.toRgb();
  }

  /**
   * Output color value to console
   */
  debug() {
    console.log(
      `%c %c ${this.toRgb()}`,
      `
      background: ${this.toRgb()};
      border: 1px solid black;
      padding: 6px;`,
      ''
    );
  }

  /**
   * Calculate the color distance
   * https://en.wikipedia.org/wiki/Color_difference Euclidean
   */
  static distance(firstColor: Color, secondColor: Color) {
    const rDelta = secondColor.r - firstColor.r;
    const gDelta = secondColor.g - firstColor.g;
    const bDelta = secondColor.b - firstColor.b;
    const squaredDeltaSums =
      Math.pow(rDelta, 2) + Math.pow(gDelta, 2) + Math.pow(bDelta, 2);
    return Math.sqrt(squaredDeltaSums);
  }
}
