import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options-service';
import { ThemePalette } from '@angular/material/core';
import { PicColorState } from 'src/app/interfaces/pic-color-state';
import { ArgumentOutOfRangeError, BehaviorSubject, Observable } from 'rxjs';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css'],
})
export class OptionsPanelComponent implements OnInit {

  private readonly MILLISECONDS_PER_SLIDER_TICK = 20;

  selfieFacingMode = 'user';
  photographerFacingMode = 'environment';

  primaryThemeColor: ThemePalette = 'primary';

  picsPerRound: number;
  notificationDuration: number;
  facingMode: string;

  picColors: PicColorState[] = [];

  constructor(private optionsService: OptionsService) {
    this.picsPerRound = optionsService.getPicsPerRound();
    this.notificationDuration = this.convertToSliderTicks(optionsService.getNotificationDuration());
    this.facingMode = optionsService.getFacingMode();
  }

  private convertToSliderTicks(durationInMilliseconds: number) : number {
    if (durationInMilliseconds <= 0 ) {
      throw new ArgumentOutOfRangeError();
    }

    return durationInMilliseconds / this.MILLISECONDS_PER_SLIDER_TICK;
  }
  ngOnInit(): void {
    this.picColors = this.optionsService.getPicColorStates();
  }

  onFacingModeChange(facingMode: string) : void {
    this.optionsService.setFacingMode(facingMode);
  }

  onNotificationDurationChange(sliderChangeEvent: MatSliderChange) : void {
    if (!sliderChangeEvent || !sliderChangeEvent.value) {
      return;
    }
    this.optionsService.setNotificationDuration(sliderChangeEvent.value * this.MILLISECONDS_PER_SLIDER_TICK);
  }

  onPicsPerRoundChange(sliderChangeEvent: MatSliderChange) : void {
    if (!sliderChangeEvent || !sliderChangeEvent.value) {
      return;
    }
    this.optionsService.setPicsPerRound(sliderChangeEvent.value);
  }
}
