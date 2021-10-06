import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { PicSet } from '../interfaces/PicSet';
import { RGB } from '../interfaces/RGB';
import { GameService } from './game-service';

const ColorThief = require( '../../../node_modules/colorthief/dist/color-thief.umd')

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

    PicSet$ : Observable<PicSet>;

    private picSet: PicSet = { Pics: [] };
    private picSetBehaviorSubject: BehaviorSubject<PicSet>;

    constructor(private gameSerivce: GameService) {
        this.picSetBehaviorSubject = new BehaviorSubject<PicSet>(this.picSet);
        this.PicSet$ = this.picSetBehaviorSubject.asObservable();
    }

    processPhoto(imageURL: string) : void {
        this.picSet.Pics.push(imageURL);
        this.picSetBehaviorSubject.next(this.picSet);

        let image$ = this.getPicFromDataURL(imageURL);
        image$.subscribe((image: HTMLImageElement) => {
            this.gameSerivce.examineColor(this.getPrimaryColor(image));
        });
    }

    getPicFromDataURL(picDataURL: string) : Observable<HTMLImageElement> {
        let getCroppedImage = this.getCroppedImage;
        let imageSubject = new ReplaySubject<HTMLImageElement>();

        let picImageElement = document.createElement('img');
        picImageElement.src = picDataURL;
        picImageElement.onload = function() {
            let croppedImage$ = getCroppedImage(picImageElement);
            croppedImage$.subscribe((image: HTMLImageElement) => {
                imageSubject.next(image);
            });
        }
        return imageSubject.asObservable();
    }

    getCroppedImage(imageElement: HTMLImageElement) : Observable<HTMLImageElement> {
        const width = imageElement.width;
        const height = imageElement.height;
        const middleX = width / 2;
        const middleY = height / 2;
        const croppedWidth = width / 3;
        const croppedHeight = height / 3;

        let croppedImageElement = document.createElement('img');
        let canvas = document.createElement('canvas');
        let croppedImageSubject = new ReplaySubject<HTMLImageElement>();
        let renderingContext = canvas.getContext("2d");
        if (renderingContext)
        {
            renderingContext.drawImage(imageElement,
                middleX - (croppedWidth / 2),
                middleY - (croppedHeight / 2),
                croppedWidth,
                croppedHeight,
                0,
                0,
                canvas.width,
                canvas.height );
            croppedImageElement.src = canvas.toDataURL('image/png');
            croppedImageElement.onload = function() {
                croppedImageSubject.next(croppedImageElement);    
            }
        }
        return croppedImageSubject.asObservable();    
    }

    getPrimaryColor(image: HTMLImageElement) : RGB {
        let colorThief = new ColorThief();
        let rgbArray = colorThief.getColor(image);
        return { R: rgbArray[0], G: rgbArray[1], B: rgbArray[2] };
    }
}