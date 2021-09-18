import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CameraSettings } from 'src/app/cameraSettings';
import { PhotoService } from 'src/app/services/photo-service';

@Component({
  selector: 'app-ng-camera',
  templateUrl: './ng-camera.component.html',
  styleUrls: ['./ng-camera.component.css']
})
export class NgCameraComponent implements OnInit {

  @ViewChild('cameraView') cameraView!: ElementRef<HTMLVideoElement>;
  @ViewChild('cameraSensor') cameraSensor!: ElementRef<HTMLCanvasElement>;
  @ViewChild('cameraOutput') cameraOutput!: ElementRef<HTMLImageElement>;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia(CameraSettings)
      .then( stream => {
        var track = stream.getTracks()[0];
        this.cameraView.nativeElement.srcObject = stream;
      })
  }

  onButtonClicked() : void {

    this.cameraSensor.nativeElement.width = this.cameraView.nativeElement.videoWidth;
    this.cameraSensor.nativeElement.height = this.cameraView.nativeElement.videoHeight;

    let renderingContext = this.cameraSensor.nativeElement.getContext("2d");
    if (renderingContext)
    {
      renderingContext.drawImage(this.cameraView.nativeElement, 0, 0);
    }
    this.cameraOutput.nativeElement.src = this.cameraSensor.nativeElement.toDataURL("image/webp");
    this.cameraOutput.nativeElement.classList.add("pic");
    this.photoService.processPhoto(this.cameraOutput.nativeElement);
  }
}
