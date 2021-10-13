import { Injectable } from '@angular/core';

import { OptionsService } from './options-service';
import { Game } from '../game';
import { NotificationService } from './notification-service';
import { Color } from '../interfaces/color';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private game: Game;
  constructor(
    private notificationService: NotificationService,
    private optionsService: OptionsService
  ) {
    this.game = new Game(
      this.notificationService,
      this.optionsService.getPicColorStates()
    );
  }

  examineColor(color: Color): void {
    this.game.examineColor(color);
  }
}
