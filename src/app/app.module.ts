import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HtmlCameraComponent } from './components/html-camera/html-camera.component';
import { NgCameraComponent } from './components/ng-camera/ng-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCameraComponent,
    NgCameraComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
