import { Color } from './color';
import { PicColor } from './pic-color';

/**
 * Describes a PicColor that is Enabled or Disabled.
 */
export interface PicColorState extends PicColor {
  /**
   * True indicates the PicColor of this PicColorState should be eligible for assignment within instances of a Game.
   */
  Enabled: boolean;
}
