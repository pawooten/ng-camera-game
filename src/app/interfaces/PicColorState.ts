import { Color } from './color';

export interface PicColor {
  Label: string;
  Value: Color;
}

export interface PicColorState extends PicColor {
  Enabled: boolean;
}
