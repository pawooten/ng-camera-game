import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { NgCameraComponent } from './components/ng-camera/ng-camera.component';
import { OptionsPanelComponent } from './components/options-panel/options-panel.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { PicColorCanvasComponent } from './components/pic-color-canvas/pic-color-canvas.component';
import { TitleComponent } from './components/title/title.component';
import { PhotoReelComponent } from './components/photo-reel/photo-reel.component';
import { MaterialModule } from './shared/material.module';
import { PicAssignmentViewerComponent } from './components/pic-assignment-viewer/pic-assignment-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCameraComponent,
    OptionsPanelComponent,
    ScoreboardComponent,
    PicColorCanvasComponent,
    TitleComponent,
    PhotoReelComponent,
    PicAssignmentViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
