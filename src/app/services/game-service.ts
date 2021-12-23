import { Injectable } from '@angular/core';

import { OptionsService } from './options-service';
import { Game } from '../interfaces/game';
import { NotificationService } from './notification-service';
import { Color } from '../interfaces/color';
import { PicColorState } from '../interfaces/pic-color-state';
import { PicAssignment } from '../interfaces/pic-assignment';
import { PicAssignmentResult } from '../interfaces/pic-assignment-result';
import { Observable } from 'rxjs';
import { LoggingService } from './logging-service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private game: Game;
  constructor(
    private notificationService: NotificationService,
    private logginService: LoggingService,
    private optionsService: OptionsService
  ) {
    this.game = new Game(
      this.notificationService,
      this.logginService,
      this.initializePicAssignments(this.optionsService.getPicColorStates())
    );
  }

  initializePicAssignments( picColorStates: PicColorState[]) : PicAssignment[] {
    const picAssignments: PicAssignment[] = [];
    picColorStates.forEach(picColorState => {
      if (picColorState.Enabled)
      {
        picAssignments.push({ PicNumber: picAssignments.length + 1, Color: picColorState });
      }
    });
    return picAssignments;
  }

  examineColor(color: Color): void {
    this.game.examineColor(color);
  }

  getResults(): Observable<PicAssignmentResult[]> {
    return this.game.AssignmentResults$;
  }
}
