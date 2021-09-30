import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PicColorState } from 'src/app/interfaces/PicColorState';
import { OptionsService } from 'src/app/services/options-service';

@Component({
  selector: 'app-pic-color-canvas',
  templateUrl: './pic-color-canvas.component.html',
  styleUrls: ['./pic-color-canvas.component.css']
})
export class PicColorCanvasComponent implements OnInit {

  @Input() PicColor! : PicColorState;
  @Output() PicColorChange = new EventEmitter<PicColorState>();

  constructor(private optionsService: OptionsService) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
