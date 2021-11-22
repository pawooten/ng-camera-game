import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Color } from '../interfaces/color';
import { DefaultSettings } from '../interfaces/default-settings';
import { PicColorState } from '../interfaces/pic-color-state';

@Injectable({
  providedIn: 'root',
})
export class OptionsService {

  constructor() {
    this.facingMode = environment.defaultFacingMode;
    this.picsPerRound = environment.defaultPicsPerRound;
  }

  private facingMode: string;
  private picsPerRound: number;

  readonly picColorStates = [
    { Label: 'Red', Value: new Color(255, 0, 0), Enabled: true },
    { Label: 'Green', Value: new Color(0, 128, 0), Enabled: true },
    { Label: 'Blue', Value: new Color(0, 0, 255), Enabled: true },
    { Label: 'Yellow', Value: new Color(255, 255, 0), Enabled: true },
    { Label: 'Orange', Value: new Color(255, 165, 0), Enabled: true },
    { Label: 'Gray', Value: new Color(128, 128, 128), Enabled: true },
    { Label: 'White', Value: new Color(255, 255, 255), Enabled: true },
    { Label: 'Brown', Value: new Color(165, 42, 42), Enabled: true },
    { Label: 'Black', Value: new Color(0, 0, 0), Enabled: true },
    { Label: 'Purple', Value: new Color(128, 0, 128), Enabled: true },
  ];

  getPicColorStates(): PicColorState[] {
    return this.picColorStates;
  }

  getFacingMode() : string {
    return this.facingMode;
  }
  setFacingMode(facingMode: string) : void {
    this.facingMode = facingMode;
  }

  getPicsPerRound() : number {
    return this.picsPerRound;
  }
  setPicsPerRound(picsPerRound: number) : void {
    this.picsPerRound = picsPerRound;
  }
}
