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

  primaryThemeColor: ThemePalette = 'primary';

  private picsPerRoundBehaviorSubject: BehaviorSubject<number>;
  picsPerRound$: Observable<number>;

  private facingModeBehaviorSubject: BehaviorSubject<string>;
  facingMode$: Observable<string>;

  picColors: PicColorState[] = [];

  constructor(private optionsService: OptionsService) {
    let defaultSettings = optionsService.getDefaultSettings();
    this.picsPerRoundBehaviorSubject = new BehaviorSubject(defaultSettings.PicsPerRound);
    this.picsPerRound$ = this.picsPerRoundBehaviorSubject.asObservable();

    this.facingModeBehaviorSubject = new BehaviorSubject<string>(defaultSettings.FacingMode);
    this.facingMode$ = this.facingModeBehaviorSubject.asObservable();
  }

  ngOnInit(): void {
    this.picColors = this.optionsService.getPicColorStates();
  }
}
