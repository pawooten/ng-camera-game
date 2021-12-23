import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Color } from '../interfaces/color';
import { PicColorState } from '../interfaces/pic-color-state';
import { LoggingService } from './logging-service';
import { StorageService, StorageKey } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class OptionsService {

  private facingMode: string;
  private picsPerRound: number;
  private notificationDuration: number;
  
  private readonly MINIMUM_NOTIFICATION_DURATION = 400;
  private readonly MAXIMUM_NOTIFICATION_DURATION = 2000;
  private readonly MINIMUM_PICS_PER_ROUND = 1;
  public readonly MAXIMUM_PICS_PER_ROUND = 16;

  private readonly settingBoundsByStorageKey : { [key in StorageKey]: {Min: number, Max:number}} = {
    [StorageKey.NotificationDuration]: { Min: this.MINIMUM_NOTIFICATION_DURATION, Max: this.MAXIMUM_NOTIFICATION_DURATION },
    [StorageKey.PicsPerRound]:  { Min: this.MINIMUM_PICS_PER_ROUND, Max: this.MAXIMUM_PICS_PER_ROUND },
  };

  private readonly settingDefaultsByStorageKey : { [key in StorageKey]: number } = {
    [StorageKey.NotificationDuration]: environment.defaultNotificationDuration,
    [StorageKey.PicsPerRound]: environment.defaultPicsPerRound
  };

  constructor(private loggingService: LoggingService, private storageService: StorageService) {
    this.facingMode = environment.defaultFacingMode;
    this.picsPerRound = this.getInitialNumericSetting(StorageKey.PicsPerRound);
    this.notificationDuration = this.getInitialNumericSetting(StorageKey.NotificationDuration);
  }

  readonly picColorStates = [
    { Label: 'Red', Value: new Color(255, 0, 0), Enabled: true },
    { Label: 'Green', Value: new Color(0, 128, 0), Enabled: true },
    { Label: 'Blue', Value: new Color(0, 0, 255), Enabled: true },
    { Label: 'Yellow', Value: new Color(255, 255, 0), Enabled: true },
    { Label: 'Orange', Value: new Color(255, 165, 0), Enabled: true },
    { Label: 'Gray', Value: new Color(128, 128, 128), Enabled: true },
    { Label: 'White', Value: new Color(255, 255, 255), Enabled: true },
    { Label: 'Brown', Value: new Color(165, 42, 42), Enabled: true },
    { Label: 'Black', Value: new Color(0, 0, 0), Enabled: true },
    { Label: 'Purple', Value: new Color(128, 0, 128), Enabled: true },
  ];

  private getInitialNumericSetting(storageKey: StorageKey): number {
    const stringKey = StorageKey[storageKey];
    const localStorageValue = this.storageService.get(stringKey);
    if (localStorageValue) {
      this.loggingService.log(`Local storage ${stringKey} loaded ${localStorageValue}`);
      const value = +localStorageValue;
      const settingBounds = this.settingBoundsByStorageKey[storageKey];
      const validationResult = this.inBounds(value, settingBounds.Min, settingBounds.Max);
      if (validationResult.valid) {
        return value;
      }
    }
    // Either failed to find the setting in local storage, or the value found in local storage didn't pass
    // bounds checking validation. Return default.
    return this.settingDefaultsByStorageKey[storageKey];
  }

  private inBounds(value: number, minimum: number, maximum: number) : { errorMessage?: string, valid:boolean } {
    const result = { valid: false, errorMessage: ''};
    if (!minimum || !maximum) {
      result.errorMessage = `inBounds Null constraint(s) received. Min ${minimum} Max ${maximum}`;
    }
    if (minimum > maximum) {
      result.errorMessage = `inBounds mismatched constraints, Min > Max. Min ${minimum} Max ${maximum}`;
    }
    result.valid = value >= minimum && value <= maximum;
    return result;
  }

  getPicColorStates(): PicColorState[] {
    return this.picColorStates;
  }

  getFacingMode() : string {
    return this.facingMode;
  }
  setFacingMode(facingMode: string) : void {
    this.facingMode = facingMode;
  }

  getPicsPerRound() : number {
    return this.picsPerRound;
  }
  setPicsPerRound(picsPerRound: number) : void {
    this.picsPerRound = picsPerRound;
    this.storageService.set(StorageKey[StorageKey.PicsPerRound], picsPerRound);
    this.loggingService.log(`Pics per Round (${picsPerRound}) stored.`);
  }

  getNotificationDuration(): number {
    return this.notificationDuration;
  }
  setNotificationDuration(notificationDuration: number) : void {
    this.notificationDuration = notificationDuration;
    this.storageService.set(StorageKey[StorageKey.NotificationDuration], notificationDuration);
    this.loggingService.log(`NotificationDuration (${notificationDuration}) stored.`);
  }
}
