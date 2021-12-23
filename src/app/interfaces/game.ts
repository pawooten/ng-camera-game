import { Color } from './color';
import { PicAssignment } from './pic-assignment';
import { PicAssignmentResult } from './pic-assignment-result';
import { PicAssignmentSubmission } from './pic-assignment-submission';
import { NotificationService } from '../services/notification-service';
import { Observable, ReplaySubject } from 'rxjs';
import { LoggingService } from '../services/logging-service';
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
    private readonly loggingService: LoggingService,
    private readonly picAssignments: PicAssignment[]
  ) {}

  examineColor(color: Color): void {
    this.loggingService.logColor(color);
    const result = this.evaluateSubmission(this.composeSubmission(color));
    this.notificationService.showNotification(result);
    this.assignmentResults.push(result);
    this.publishAssignmentResults();
    this.index += 1;
    this.loggingService.log(`Level ${this.index} of ${this.picAssignments.length} reached.`);
    if (this.picAssignments.length == this.index) {
      this.loggingService.log(`Hooray, you won!`);
      this.index = 0; // loop back around
    }
  }

  /**
   * Publishes a PicAssignmentResult[] composed of the actual assignment results from completed rounds
   * of the game plus placeholder instances that represent rounds of the game the player has yet to reach.
   */
  publishAssignmentResults(): void {
    const placeholderResults  =
      this.getPlaceholderPicAssignmentResults(this.picAssignments.length - this.assignmentResults.length);
    this.assignmentResultSubject.next([...this.assignmentResults, ...placeholderResults]);
  }

  /**
   * Returns a PicAssignmentResult[] array popoulated whose length corresponds to the count parameter.
   * @param count number of placeholder PicAssignmentResult instances which should be returned.
   * @returns PicAssignmentResult[] array popoulated whose length corresponds to the count parameter.
   */
  getPlaceholderPicAssignmentResults(count: number) : PicAssignmentResult[] {
    const results: PicAssignmentResult[] = [];
    for (let i = 0; i < count; i++) {
      results.push(this.getPlacholderPicAssignmentResult());
    }
    return results;
  }

  getPlacholderPicAssignmentResult() : PicAssignmentResult {
    return {
      Submission: {
        Assignment: { PicNumber: 0,
          Color: { Label: '', Value: new Color(0,0,0) }
        },
        Color: { Label: '?', Value: new Color(0, 0, 0) }
      },
      Distance: 0,
      Score: 0
    };
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
    if (!submission.Color)
    {
      throw new ReferenceError('submission.Color is not defined');
    }
    const distance = Color.distance(submission.Color.Value, submission.Assignment.Color.Value);
    return {
      Submission: submission,
      Distance: distance,
      Score: 100
    }
  }
}
