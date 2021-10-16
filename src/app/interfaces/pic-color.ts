import { Color } from "./color";

/**
 * Describes a labeled Color.
 */
export interface PicColor {
    /**
     * Label of the Color of this PicColor. Labels are used for display within the UI.
     * Note, labels do not have to match defined CSS colors.
     * Ex. 'Green', 'Rebecca Purple', 'UofM Blue'
     */
    Label: string;
    /**
     * Color value of this PicColor
     */
    Value: Color;
}  