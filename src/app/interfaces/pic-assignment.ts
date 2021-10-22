import { PicColor } from "./pic-color";

/**
 * Describes an assignment of a PicColor. Game instances are composed of a series
 * of PicAssignment instances.
 */
export interface PicAssignment {
    /**
     * Describes the position of this instance relative to other PicAssignment instances.
     * PicNumber 1 is he first PicAssignment of a Game. Once this assignment has been matched,
     * the game progresses to PicNumber 2 and continues until all assignments of the Game are satisfied.
     */
    PicNumber: number;
    /**
     * The PicColor of this PicAssignment.
     */
    Color: PicColor;
}
