import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import ColorThief from 'colorthief';

import { PicSet } from '../interfaces/pic-set';
import { GameService } from './game-service';
import { Color } from '../interfaces/color';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

    get(key: StorageKey) : string | null {
        return window.localStorage.getItem(StorageKey[key]);
    }
    set(key: StorageKey, value: string | number ) : void {
        if (typeof value === "number")
        {
            value = String(value);
        }
        window.localStorage.setItem(StorageKey[key], value);
    }
}

export enum StorageKey { NotificationDuration, PicsPerRound };