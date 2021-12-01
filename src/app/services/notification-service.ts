import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { PicAssignmentResultViewerComponent } from '../components/pic-assignment-result-viewer/pic-assignment-result-viewer.component';
import { PicAssignmentResult } from '../interfaces/pic-assignment-result';
import { OptionsService } from './options-service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private snackBar: MatSnackBar, private optionsService: OptionsService) {}

  showTextNotification(message: string) : void {
      this.snackBar.open(message);
  }
  showNotification(assignmentResult: PicAssignmentResult) : void {
    if (!assignmentResult) {
      return;
    }
    let options: MatSnackBarConfig = {
      duration: this.optionsService.getNotificationDuration(),
      data: JSON.stringify(assignmentResult)
    };
    this.snackBar.openFromComponent(PicAssignmentResultViewerComponent,      
      options,
    );
  }
}