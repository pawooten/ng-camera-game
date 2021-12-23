import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
/**
 * NgModule that includes all Material modules.
 */
@NgModule({
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class MaterialModule {}
