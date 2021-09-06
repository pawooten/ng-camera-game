import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CameraSettings } from '../../cameraSettings';
@Component({
  selector: 'app-html-camera',
  templateUrl: './html-camera.component.html',
  styleUrls: ['./html-camera.component.css']
})
export class HtmlCameraComponent implements OnInit {

  @ViewChild('cameraView') cameraView!: ElementRef<HTMLVideoElement>;
  @ViewChild('cameraSensor') cameraSensor!: ElementRef<HTMLCanvasElement>;
  @ViewChild('cameraOutput') cameraOutput!: ElementRef<HTMLImageElement>;

  constructor() { }

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
    this.cameraOutput.nativeElement.classList.add("taken");
  }
}
