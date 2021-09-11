import { Component, OnInit } from '@angular/core';
import { UserPreferenceService } from 'src/app/services/options-service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css']
})
export class OptionsPanelComponent implements OnInit {
  primaryThemeColor: ThemePalette = 'primary';

  private readonly colorStates: { [color:string]: boolean} = {};
  readonly picColors = [  { Label: 'Red', Value: 'red' },
                          { Label: 'Green', Value: 'green' },
                          { Label: 'Blue', Value: 'blue' },
                          { Label: 'Yellow', Value: 'yellow' },
                          { Label: 'Orange', Value: 'orange' },
                          { Label: 'Gray', Value: 'gray' },
                          { Label: 'White', Value: 'white' },
                          { Label: 'Brown', Value: 'brown' },
                          { Label: 'Black', Value: 'black' },
                          { Label: 'Purple', Value: 'purple' },                        
                        ];
  constructor(private userPreferenceService: UserPreferenceService) {
    this.picColors.forEach( color => this.colorStates[color.Value] = true);
  }

  ngOnInit(): void {
    this.userPreferenceService.sayHello();
  }

  isChecked(color: string): boolean {
    return this.colorStates[color];
  }
}
