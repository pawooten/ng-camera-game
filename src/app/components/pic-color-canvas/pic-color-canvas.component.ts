import { Component, OnInit } from '@angular/core';
import { PicColorState } from 'src/app/interfaces/PicColorState';
import { OptionsService } from 'src/app/services/options-service';
@Component({
  selector: 'app-pic-color-canvas',
  templateUrl: './pic-color-canvas.component.html',
  styleUrls: ['./pic-color-canvas.component.css']
})
export class PicColorCanvasComponent implements OnInit {

  PicColor : PicColorState;
  constructor(private optionsService: OptionsService) {
    this.PicColor = this.optionsService.picColorStates[0];
  }

  ngOnInit(): void {
  }

}
