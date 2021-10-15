import { Color } from './interfaces/color';
import { PicColorState } from './interfaces/pic-color-state';
import { NotificationService } from './services/notification-service';

/*
 * A Game is composed of a set of picSets the player must match.
 */
export class Game {
  private picSetIndex = 2; // blue

  constructor(
    private readonly notificationService: NotificationService,
    private readonly picSets: PicColorState[]
  ) {}

  examineColor(color: Color): void {
    color.debug();
    // console.log(`color is ${color}`);
    let picSet = this.picSets[this.picSetIndex];
    let distance = Color.distance(color, picSet.Value);
    this.notificationService.showNotificationMessage(`distance=${distance}`);
  }
}
