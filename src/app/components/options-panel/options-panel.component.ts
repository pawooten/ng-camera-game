import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options-service';
import { ThemePalette } from '@angular/material/core';
import { PicColorState } from 'src/app/interfaces/pic-color-state';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css'],
})
export class OptionsPanelComponent implements OnInit {
  selfieFacingMode = 'user';
  photographerFacingMode = 'environment';

  primaryThemeColor: ThemePalette = 'primary';

  picsPerRound: number;
  facingMode: string;

  picColors: PicColorState[] = [];

  constructor(private optionsService: OptionsService) {
    let defaultSettings = optionsService.getDefaultSettings();
    this.picsPerRound = defaultSettings.PicsPerRound;
    this.facingMode = defaultSettings.FacingMode;
  }

  ngOnInit(): void {
    this.picColors = this.optionsService.getPicColorStates();
  }
}
