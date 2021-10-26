import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { Color } from 'src/app/interfaces/color';
import { PicAssignmentResult } from 'src/app/interfaces/pic-assignment-result';

@Component({
  selector: 'app-pic-assignment-result-viewer',
  templateUrl: './pic-assignment-result-viewer.component.html',
  styleUrls: ['./pic-assignment-result-viewer.component.css']
})
export class PicAssignmentResultViewerComponent implements OnInit {

  Result: PicAssignmentResult;

  constructor(@Inject(MAT_SNACK_BAR_DATA) data: string) {
    this.Result = JSON.parse(data) as PicAssignmentResult;
    
    // feels so wrong
    let jsonColor;
    if (this.Result.Submission.Color) {
      jsonColor = this.Result.Submission.Color!.Value;
      this.Result.Submission.Color!.Value = new Color(jsonColor.r, jsonColor.g, jsonColor.b);  
    }
    jsonColor = this.Result.Submission.Assignment.Color.Value;
    this.Result.Submission.Assignment.Color.Value = new Color(jsonColor.r, jsonColor.g, jsonColor.b);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}