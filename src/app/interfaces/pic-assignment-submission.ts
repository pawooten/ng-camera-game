import { PicAssignment } from './pic-assignment';
import { PicColor } from './pic-color';

export interface PicAssignmentSubmission {
    /**
     * The assignment of the submission, aka the pic color the user was challenged to match.
     */
    Assignment: PicAssignment;
    /**
     * The color of the submission. This is the color which will be compared to the assignment
     * to determine score (and if the user advances to the next assignment / round).
     */
    Color: PicColor;
}