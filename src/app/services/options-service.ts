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

  private readonly MINIMUM_NOTIFICATION_DURATION = 100;
  private readonly MAXIMUM_NOTIFICATION_DURATION = 2000;
  private readonly MINIMUM_PICS_PER_ROUND = 1;
  public readonly MAXIMUM_PICS_PER_ROUND = 16;


  constructor(private loggingService: LoggingService, private storageService: StorageService) {
    this.facingMode = environment.defaultFacingMode;
    this.picsPerRound = this.getInitialPicsPerRound();
    this.notificationDuration = this.getInitialNotificationDuration();
  }

  private facingMode: string;
  private picsPerRound: number;
  private notificationDuration: number;

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

  private getInitialNotificationDuration() : number {
    const localStorageNotificationDuration = this.storageService.get(StorageKey[StorageKey.NotificationDuration]);
    if (localStorageNotificationDuration) {
      var notificationDuration = +localStorageNotificationDuration;
      if (notificationDuration >= this.MINIMUM_NOTIFICATION_DURATION &&
          notificationDuration <= this.MAXIMUM_NOTIFICATION_DURATION) {
            this.loggingService.log(`Local storage notification duration loaded (${notificationDuration})`);            
            return notificationDuration; // We've loaded a valid notificationDuration from local storage, we're done
      }
      else {
        this.loggingService.log(`Invalid notification duration loaded (${notificationDuration})`);
      }
    }

    // No luck in local storage
    this.loggingService.log(`Default notification duration loaded (${environment.defaultNotificationDuration})`);
    return environment.defaultNotificationDuration;
  }

  private getInitialPicsPerRound() : number {
    const localStoragePicsPerRound = this.storageService.get(StorageKey[StorageKey.PicsPerRound]);
    if (localStoragePicsPerRound) {
      this.loggingService.log(`Local storage pics per round loaded (${localStoragePicsPerRound})`);
      const picsPerRound = +localStoragePicsPerRound;
      const validationResult = this.inBounds(picsPerRound, this.MINIMUM_PICS_PER_ROUND, this.MAXIMUM_PICS_PER_ROUND);
      if ( validationResult.valid) {
        this.loggingService.log(`Local storage pics per round validated (${picsPerRound})`);
        return picsPerRound; // We've loaded a valid picsPerRound from local storage, we're done
      } else {
        this.loggingService.log(`Local storage pics per round invalid. (${picsPerRound})`);
      }
      if (validationResult.errorMessage) {
        this.loggingService.log(`Invalid pics per round loaded (${picsPerRound})`);
      }
    }

    // Either no PicsPerRound was found in local storage, or the value which was found is invalid
    this.loggingService.log(`Default pics per round loaded (${environment.defaultPicsPerRound})`);
    return environment.defaultPicsPerRound;
  }

  private getSettingsBoundsByStorageKey() : { [key: string]: {Min: number, Max:number}} {
    const lookup: { [key: string]: {Min: number, Max:number}} = {};
    lookup[StorageKey[StorageKey.NotificationDuration]] = { Min: this.MINIMUM_NOTIFICATION_DURATION, Max: this.MAXIMUM_NOTIFICATION_DURATION};
    return lookup;
  }

  private settingsByStorageKey : { [key: string]: {Min: number, Max:number}} = {
    'NotificationDuration' : { Min: 4, Max: 400 },
    'PicsPerRound' : { Min: 2, Max: 10 }
  };

  private getInitialNumericSetting(storageKey: StorageKey) {
    const localStorageValue = this.storageService.get(StorageKey[storageKey]);
    if (localStorageValue) {
      this.loggingService.log(`Local storage ${StorageKey[storageKey]} loaded ${localStorageValue}`);
      const value = +localStorageValue;
      // const validationResult = this.inBounds(value, )
    }
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
