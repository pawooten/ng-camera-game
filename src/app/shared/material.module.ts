import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
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
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class MaterialModule {}
