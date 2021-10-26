import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PicAssignmentResult } from 'src/app/interfaces/pic-assignment-result';
import { GameService } from 'src/app/services/game-service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  assignmentResults$: Observable<PicAssignmentResult[]>;

  constructor(private gameService: GameService) {
    this.assignmentResults$ = gameService.getResults();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
