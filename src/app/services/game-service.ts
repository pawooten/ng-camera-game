import { Injectable } from '@angular/core';
import { RGB } from '../interfaces/RGB';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    examineColor(color: RGB) : void {
        console.log('color is ' + JSON.stringify(color));
    }
}