import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtmlCameraComponentComponent } from './components/html-camera-component/html-camera-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCameraComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
