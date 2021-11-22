import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OptionsService } from 'src/app/services/options-service';
import { PhotoService } from 'src/app/services/photo-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ng-camera',
  templateUrl: './ng-camera.component.html',
  styleUrls: ['./ng-camera.component.css']
})
export class NgCameraComponent implements OnInit {

  appBaseHref = environment.appBaseHref;

  @ViewChild('cameraVideo') cameraVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('cameraCanvas') cameraCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private photoService: PhotoService, private optionsService: OptionsService) { }

  ngOnInit(): void {
    let cameraSettings = {
      video: { facingMode: this.optionsService.getFacingMode() },
      audio: false,
    };
    navigator.mediaDevices.getUserMedia(cameraSettings)
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
