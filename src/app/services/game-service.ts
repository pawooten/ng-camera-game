import { Injectable } from '@angular/core';

import { OptionsService } from './options-service';
import { PicColorState } from '../interfaces/PicColorState';
import { RGB } from '../interfaces/RGB';
import { RGBFromString, calculateRGBColorDistance } from '../utils';
import { Game } from '../game';
import { NotificationService } from './notification-service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    private game: Game;
    constructor(private notificationService: NotificationService, private optionsService: OptionsService){
        this.game = new Game(this.notificationService, this.optionsService.getPicColorStates());
    }

    examineColor(color: RGB) : void {
        this.game.examineColor(color);
    }
}