import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PicAssignmentViewerComponent } from '../components/pic-assignment-viewer/pic-assignment-viewer.component';
import { PicAssignment } from '../interfaces/pic-assignment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor( private snackBar: MatSnackBar) {}

    showNotificationMessage(message: string) : void {
        this.snackBar.open(message);
    }
    showPicAssignmentNotification(picAssignment: PicAssignment) : void {
      if (!picAssignment) {
        return;
      }
      this.snackBar.openFromComponent(PicAssignmentViewerComponent, { data: JSON.stringify(picAssignment) });
    }
}