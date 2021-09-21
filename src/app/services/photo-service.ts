import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PicSet } from '../interfaces/PicSet';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

    Photos$ : Observable<PicSet>;

    private picSet: PicSet = { Pics: [] };
    private photos: BehaviorSubject<PicSet>;

    constructor() {
        this.photos = new BehaviorSubject<PicSet>(this.picSet);
        this.Photos$ = this.photos.asObservable();
    }

    processPhoto(imageURL: string) : void {
        this.picSet.Pics.push(imageURL);
    }
}