import { Injectable } from '@angular/core';
import { PicColorState } from '../interfaces/PicColorState';
import { RGB } from '../interfaces/RGB';
import { RGBFromString, calculateRGBColorDistance } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    private picSets: PicColorState[] = [];
    private picSetIndex = 0;
    
    load(newPicSets: PicColorState[]) {
        this.picSets = newPicSets;
        this.picSetIndex = 0;
    }

    examineColor(color: RGB) : void {
        console.log('color is ' + JSON.stringify(color));
        let picSet = this.picSets[this.picSetIndex];
        let picRGB = RGBFromString(picSet.Value);
        // how to diff ...
        let distance = calculateRGBColorDistance(color, picRGB);
        console.log(`distance=${distance}`);
    }
}