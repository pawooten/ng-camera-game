import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PicAssignmentResultViewerComponent } from '../components/pic-assignment-result-viewer/pic-assignment-result-viewer.component';
import { PicAssignmentResult } from '../interfaces/pic-assignment-result';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(private snackBar: MatSnackBar) {}

    showNotificationMessage(message: string) : void {
        this.snackBar.open(message);
    }
    showPicAssignmentNotification(assignmentResult: PicAssignmentResult) : void {
      if (!assignmentResult) {
        return;
      }
      this.snackBar.openFromComponent(PicAssignmentResultViewerComponent, { data: JSON.stringify(assignmentResult) });
    }
}