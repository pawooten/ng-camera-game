import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options-service';

@Component({
  selector: 'app-game-status-badge',
  templateUrl: './game-status-badge.component.html',
  styleUrls: ['./game-status-badge.component.css']
})
export class GameStatusBadgeComponent implements OnInit {

  picsPerRound: number;
  constructor(private optionsService: OptionsService) {
    this.picsPerRound = this.optionsService.getPicsPerRound();
  }

  ngOnInit(): void {
  }

}
