import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';
import { PicColorState } from '../interfaces/PicColorState';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

    readonly picColorStates = [  { Label: 'Red', Value: 'red', Enabled: true },
    { Label: 'Green', Value: 'green', Enabled: true },
    { Label: 'Blue', Value: 'blue', Enabled: true },
    { Label: 'Yellow', Value: 'yellow', Enabled: true },
    { Label: 'Orange', Value: 'orange', Enabled: true },
    { Label: 'Gray', Value: 'gray', Enabled: true },
    { Label: 'White', Value: 'white', Enabled: true },
    { Label: 'Brown', Value: 'brown', Enabled: true },
    { Label: 'Black', Value: 'black', Enabled: true },
    { Label: 'Purple', Value: 'purple', Enabled: true },                        
  ];
//   private playerNameBehaviorSubject: BehaviorSubject<string>;
//   playerName$: Observable<string>;

  constructor() {
    // this.playerNameBehaviorSubject = new BehaviorSubject<string>('');
    // this.playerName$ = this.playerNameBehaviorSubject.asObservable();
    // this.playerNameBehaviorSubject.next('Paul');
  }
  getPicColorStates() : PicColorState[] {
      return this.picColorStates;
  }
}
