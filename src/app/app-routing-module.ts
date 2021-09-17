import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsPanelComponent } from './components/options-panel/options-panel.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { NgCameraComponent } from './components/ng-camera/ng-camera.component';
import { TitleComponent } from './title/title.component';
const routes: Routes = [
    { path: '', component: TitleComponent },
    { path: 'options', component: OptionsPanelComponent },
    { path: 'options', component: OptionsPanelComponent },
    { path: 'scoreboard', component: ScoreboardComponent },
    { path: 'camera', component: NgCameraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
