import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
    lastPhoto? : HTMLImageElement;

    constructor() {
    }

    processPhoto(photoImage: HTMLImageElement) : boolean {
        this.lastPhoto = photoImage;
        return true;
    }
}