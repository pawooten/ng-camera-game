import { Color } from './color';
import { PicAssignment } from './pic-assignment';
import { PicAssignmentResult } from './pic-assignment-result';
import { PicAssignmentSubmission } from './pic-assignment-submission';
import { NotificationService } from '../services/notification-service';
import { Observable, ReplaySubject } from 'rxjs';
/*
 * A Game is composed of a set of picAssignments the player must match.
 */
export class Game {
  private index = 0;

  private readonly assignmentResults: PicAssignmentResult[] = [];
  private readonly assignmentResultSubject = new ReplaySubject<PicAssignmentResult[]>();

  AssignmentResults$ = this.assignmentResultSubject.asObservable();

  constructor(
    private readonly notificationService: NotificationService,
    private readonly picAssignments: PicAssignment[]
  ) {}

  examineColor(color: Color): void {
    color.debug();
    const result = this.evaluateSubmission(this.composeSubmission(color));
    this.notificationService.showPicAssignmentNotification(result);
    this.assignmentResults.push(result);
    this.assignmentResultSubject.next(this.assignmentResults);
    this.index += 1;
    if (this.assignmentResults.length == this.index) {
      // hooray, you won
      this.index = 0; // loop back around
    }
  }

  composeSubmission(color: Color) : PicAssignmentSubmission {
    const assignment = this.picAssignments[this.index];
    return {
      Assignment: assignment,
      Color: {
        Label: `Pic ${this.index + 1 } of ${this.picAssignments.length}`,
        Value: color
      }
    };
  }

  evaluateSubmission(submission: PicAssignmentSubmission) : PicAssignmentResult {
    const distance = Color.distance(submission.Color.Value, submission.Assignment.Color.Value);
    return {
      Submission: submission,
      Distance: distance,
      Score: 100
    }
  }
}
