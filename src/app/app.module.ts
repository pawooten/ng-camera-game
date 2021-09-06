import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtmlCameraComponent } from './components/html-camera/html-camera.component';
import { NgCameraButtonComponent } from './components/ng-camera-button/ng-camera-button.component';
import { NgCameraComponent } from './components/ng-camera/ng-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCameraComponent,
    NgCameraButtonComponent,
    NgCameraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
