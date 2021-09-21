import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PhotoService } from 'src/app/services/photo-service';
import { PicSet } from 'src/app/interfaces/PicSet';

@Component({
  selector: 'app-photo-reel',
  templateUrl: './photo-reel.component.html',
  styleUrls: ['./photo-reel.component.css']
})
export class PhotoReelComponent implements OnInit {
  private photoImageURLsBehaviorSubject = new BehaviorSubject<string[]>([]);
  photoImageURLs$ : Observable<string[]>;
  constructor(private photoService: PhotoService) {
    this.photoImageURLs$ = this.photoImageURLsBehaviorSubject.asObservable();
    this.photoService.PicSet$.subscribe( newPicSet => {
      this.photoImageURLsBehaviorSubject.next(newPicSet.Pics);
    });
  }

  ngOnInit(): void {
  }

}
