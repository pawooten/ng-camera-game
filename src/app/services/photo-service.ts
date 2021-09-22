import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PicSet } from '../interfaces/PicSet';

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
    }
}