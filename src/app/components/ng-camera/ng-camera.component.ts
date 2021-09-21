import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CameraSettings } from 'src/app/cameraSettings';
import { PhotoService } from 'src/app/services/photo-service';

@Component({
  selector: 'app-ng-camera',
  templateUrl: './ng-camera.component.html',
  styleUrls: ['./ng-camera.component.css']
})
export class NgCameraComponent implements OnInit {

  @ViewChild('cameraVideo') cameraVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('cameraCanvas') cameraCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia(CameraSettings)
      .then( stream => {
        var track = stream.getTracks()[0];
        this.cameraVideo.nativeElement.srcObject = stream;
      })
  }

  onButtonClicked() : void {

    this.cameraCanvas.nativeElement.width = this.cameraVideo.nativeElement.videoWidth;
    this.cameraCanvas.nativeElement.height = this.cameraVideo.nativeElement.videoHeight;

    let renderingContext = this.cameraCanvas.nativeElement.getContext("2d");
    if (renderingContext)
    {
      renderingContext.drawImage(this.cameraVideo.nativeElement, 0, 0);
    }
    const imageURL = this.cameraCanvas.nativeElement.toDataURL("image/webp");
    this.photoService.processPhoto(imageURL);
  }
}
