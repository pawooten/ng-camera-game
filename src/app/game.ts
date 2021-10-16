import { Color } from './interfaces/color';
import { PicAssignment } from './interfaces/pic-assignment';
import { NotificationService } from './services/notification-service';

/*
 * A Game is composed of a set of picSets the player must match.
 */
export class Game {
  private index = 2; // blue

  constructor(
    private readonly notificationService: NotificationService,
    private readonly picAssignments: PicAssignment[]
  ) {}

  examineColor(color: Color): void {
      color.debug();
      let picAssignment = this.picAssignments[this.index];
      let distance = Color.distance(color, picAssignment.Color.Value);
      // this.notificationService.showNotificationMessage(`distance=${distance}`);
      this.notificationService.showPicAssignmentNotification(picAssignment);
    }
}
