import { Component, Inject, Input, OnInit } from '@angular/core';
import { PicAssignment } from 'src/app/interfaces/pic-assignment';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { Color } from 'src/app/interfaces/color';

@Component({
  selector: 'app-pic-assignment-viewer',
  templateUrl: './pic-assignment-viewer.component.html',
  styleUrls: ['./pic-assignment-viewer.component.css']
})
export class PicAssignmentViewerComponent implements OnInit {

  PicAssignment: PicAssignment;

  constructor(@Inject(MAT_SNACK_BAR_DATA) data: string) {
    this.PicAssignment = JSON.parse(data) as PicAssignment;
    const jsonColor = this.PicAssignment.Color.Value;
    this.PicAssignment.Color.Value = new Color(jsonColor.r, jsonColor.g, jsonColor.b);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}