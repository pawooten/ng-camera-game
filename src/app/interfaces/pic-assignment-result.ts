import { PicAssignmentSubmission } from "./pic-assignment-submission";

/**
 * Describes the result of evaluating a PicAssignmentSubmission, including (color) Distance and Score.
 */
export interface PicAssignmentResult {
    Submission: PicAssignmentSubmission;
    Distance: number;
    Score: number;
}