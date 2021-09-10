import { Component, OnInit } from '@angular/core';
import { UserPreferenceService } from 'src/app/services/options-service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css']
})
export class OptionsPanelComponent implements OnInit {
  color: ThemePalette = 'primary';
  constructor(private userPreferenceService: UserPreferenceService) { }

  ngOnInit(): void {
    this.userPreferenceService.sayHello();
  }

}
