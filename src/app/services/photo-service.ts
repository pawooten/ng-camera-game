import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PicSet } from '../interfaces/PicSet';

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

    constructor() {
        this.picSetBehaviorSubject = new BehaviorSubject<PicSet>(this.picSet);
        this.PicSet$ = this.picSetBehaviorSubject.asObservable();
    }

    processPhoto(imageURL: string) : void {
        this.picSet.Pics.push(imageURL);
        this.picSetBehaviorSubject.next(this.picSet);

        let image = this.getPicFromDataURL(imageURL);
        let color = this.getPrimaryColor(image);
    }

    getPicFromDataURL(picDataURL: string) : HTMLImageElement {
        let picImageElement = document.createElement('img');
        picImageElement.src = picDataURL;
        // picImageElement.width = 100;
        // picImageElement.height = 100;
        return picImageElement;
    }

    getPrimaryColor(image: HTMLImageElement) : string {
        let colorThief = new ColorThief();
        return colorThief.getColor(image);
    }
}