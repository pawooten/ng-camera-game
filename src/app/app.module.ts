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
import { PicAssignmentResultViewerComponent } from './components/pic-assignment-result-viewer/pic-assignment-result-viewer.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NgCameraComponent,
    OptionsPanelComponent,
    ScoreboardComponent,
    PicColorCanvasComponent,
    TitleComponent,
    PhotoReelComponent,
    PicAssignmentResultViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.appBaseHref}],
  bootstrap: [AppComponent],
})
export class AppModule {}
