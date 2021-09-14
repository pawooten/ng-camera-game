import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options-service';
import {ThemePalette} from '@angular/material/core';
import { PicColorState } from 'src/app/interfaces/PicColorState';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css']
})
export class OptionsPanelComponent implements OnInit {
  primaryThemeColor: ThemePalette = 'primary';

  readonly picColorStatesByColor: { [color:string]: PicColorState} = {};

  constructor(private optionsService: OptionsService) {
  }

  ngOnInit(): void {
    this.optionsService.getPicColorStates().forEach( picColorState => {
      this.picColorStatesByColor[picColorState.Value] = picColorState;
    });
  }

  isChecked(color: string): boolean {
    return this.picColorStatesByColor[color].Enabled;
  }
}
