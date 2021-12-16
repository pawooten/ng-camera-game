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

    get(key: string) : string | null {
        return window.localStorage.getItem(key);
    }
    set(key: string, value: string | number ) : void {
        if (typeof value === "number")
        {
            value = String(value);
        }
        window.localStorage.setItem(key, value);
    }
}

export enum StorageKey { NotificationDuration, PicsPerRound };