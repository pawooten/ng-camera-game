import { Injectable } from '@angular/core';
import { PicColorState } from '../interfaces/PicColorState';
import { GameService } from './game-service';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

    readonly picColorStates = [  { Label: 'Red', Value: 'rgb(255, 0, 0)', Enabled: true },
    { Label: 'Green', Value: '	rgb(0, 128, 0)', Enabled: true },
    { Label: 'Blue', Value: 'rgb(0, 0, 255)', Enabled: true },
    { Label: 'Yellow', Value: 'rgb(255, 255, 0)', Enabled: true },
    { Label: 'Orange', Value: 'rgb(255, 165, 0)', Enabled: true },
    { Label: 'Gray', Value: 'rgb(128, 128, 128)', Enabled: true },
    { Label: 'White', Value: '	rgb(255, 255, 255)', Enabled: true },
    { Label: 'Brown', Value: 'rgb(165, 42, 42)', Enabled: true },
    { Label: 'Black', Value: 'rgb(0, 0, 0)', Enabled: true },
    { Label: 'Purple', Value: 'rgb(128, 0, 128)', Enabled: true },                        
  ];

  constructor(private gameService: GameService) {
    this.gameService.load(this.picColorStates)
  }

  getPicColorStates() : PicColorState[] {
      return this.picColorStates;
  }
}
