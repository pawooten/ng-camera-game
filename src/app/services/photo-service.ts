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

    readonly redImageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADLSURBVHhe7cfBCQAgAMSw239p/RcsDlDIJzvLLz6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+Aj+Ag+go/gI/gIPoKP4CP4CD6Cj+DztF2eLesr6yjgngAAAABJRU5ErkJggg==';
    readonly blueImageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADnSURBVHhe7dChAcAwDMCwrP//3JEeEHOJmPubucPOeWXBrMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCstZkfiGABx0A/pbQAAAAASUVORK5CYII=';
    readonly greenImageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADnSURBVHhe7dChAcAwDMCwrJf39JEeEHOJmPubOyydVxbMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCswKzArMCsxam/kBMosBSMEkrosAAAAASUVORK5CYII=';
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
        let picImageElement = document.createElement('img');
        picImageElement.src = picDataURL;
        let imageSubject = new ReplaySubject<HTMLImageElement>();
        picImageElement.onload = function() {
            imageSubject.next(picImageElement);
        }
        return imageSubject.asObservable();
    }

    getPrimaryColor(image: HTMLImageElement) : RGB {
        let colorThief = new ColorThief();
        let rgbArray = colorThief.getColor(image);
        return { R: rgbArray[0], G: rgbArray[1], B: rgbArray[2] };
    }
}