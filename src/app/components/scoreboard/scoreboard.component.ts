import { Component, OnInit } from '@angular/core';
import { PicAssignment } from 'src/app/interfaces/PicAssignment';
import { OptionsService } from '../../services/options-service';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  picAssignments: PicAssignment[];

  constructor(private optionsService: OptionsService) {
    this.picAssignments = [
      {
        Color: this.optionsService.picColorStates[0],
        PicNumber: 1,
        Score: 100,
      },
      { Color: this.optionsService.picColorStates[1], PicNumber: 2, Score: 80 },
      { Color: this.optionsService.picColorStates[2], PicNumber: 3, Score: 60 },
      { Color: this.optionsService.picColorStates[3], PicNumber: 4, Score: 80 },
      { Color: this.optionsService.picColorStates[4], PicNumber: 5, Score: 0 },
      { Color: this.optionsService.picColorStates[5], PicNumber: 6, Score: 0 },
    ];
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
