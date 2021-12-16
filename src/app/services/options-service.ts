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

  constructor(private loggingService: LoggingService, private storageService: StorageService) {
    this.facingMode = environment.defaultFacingMode;
    this.picsPerRound = environment.defaultPicsPerRound;
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
