import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service';

@Component({
  selector: 'app-photo-reel',
  templateUrl: './photo-reel.component.html',
  styleUrls: ['./photo-reel.component.css']
})
export class PhotoReelComponent implements OnInit {

  photoImageURL : string;
  constructor(private photoService: PhotoService) {
    this.photoImageURL = "//:0";
    this.photoService.Photos$.subscribe( imageURL => {
      this.photoImageURL = imageURL;
    })
  }

  ngOnInit(): void {
  }

}
