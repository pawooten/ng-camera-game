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
        var cropper = this.cropImage;
        let picImageElement = document.createElement('img');
        picImageElement.src = picDataURL;
        let imageSubject = new ReplaySubject<HTMLImageElement>();
        picImageElement.onload = function() {
            imageSubject.next(picImageElement);
            imageSubject.next(cropper(picImageElement));
        }
        return imageSubject.asObservable();
    }

    cropImage(imageElement: HTMLImageElement) : HTMLImageElement {
        const width = imageElement.width;
        const height = imageElement.height;

        const croppedWidth = width / 3;
        const croppedHeight = height / 3;

        let renderingContext = document.createElement('canvas').getContext("2d");
        if (renderingContext)
        {
            renderingContext.drawImage(imageElement, 0, 0);
            renderingContext.clearRect(0, 0, croppedWidth, height); // left column
            renderingContext.clearRect(width - croppedWidth, 0, croppedWidth, height); // right column
            renderingContext.clearRect(croppedWidth, 0, croppedWidth, croppedHeight); // top square
            renderingContext.clearRect(croppedWidth, height - croppedHeight, croppedWidth, height); // bottom square
        }
        return imageElement;
    }

    getPrimaryColor(image: HTMLImageElement) : RGB {
        let colorThief = new ColorThief();
        let rgbArray = colorThief.getColor(image);
        return { R: rgbArray[0], G: rgbArray[1], B: rgbArray[2] };
    }
}