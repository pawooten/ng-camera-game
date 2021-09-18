import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
    Photos$ : Observable<string>;
    private photos: BehaviorSubject<string>;
    constructor() {
        this.photos = new BehaviorSubject<string>('');
        this.Photos$ = this.photos.asObservable();
    }

    processPhoto(imageURL: string) : boolean {
        this.photos.next(imageURL);
        return true;
    }
}