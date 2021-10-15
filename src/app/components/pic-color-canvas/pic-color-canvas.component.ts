import { Component, Input, OnInit } from '@angular/core';
import { PicColor } from 'src/app/interfaces/PicColor';

@Component({
  selector: 'app-pic-color-canvas',
  templateUrl: './pic-color-canvas.component.html',
  styleUrls: ['./pic-color-canvas.component.css'],
})
export class PicColorCanvasComponent implements OnInit {
  @Input() PicColor?: PicColor;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
