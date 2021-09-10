import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {
//   private playerNameBehaviorSubject: BehaviorSubject<string>;
//   playerName$: Observable<string>;

  constructor() {
    // this.playerNameBehaviorSubject = new BehaviorSubject<string>('');
    // this.playerName$ = this.playerNameBehaviorSubject.asObservable();
    // this.playerNameBehaviorSubject.next('Paul');
  }
  sayHello() : void {
      console.log('hello');
  }
}
