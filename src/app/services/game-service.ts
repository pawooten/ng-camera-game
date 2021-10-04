import { Injectable } from '@angular/core';

import { OptionsService } from './options-service';
import { PicColorState } from '../interfaces/PicColorState';
import { RGB } from '../interfaces/RGB';
import { RGBFromString, calculateRGBColorDistance } from '../utils';
import { Game } from '../game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    private game: Game;
    constructor(private optionsService: OptionsService){
        this.game = new Game(this.optionsService.getPicColorStates());
    }

    examineColor(color: RGB) : void {
        this.game.examineColor(color);
    }
}