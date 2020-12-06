import { Component, Input } from '@angular/core';
import {IMatch} from 'src/app/dto/Match';

@Component({
  selector: 'match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent {
	@Input() match: IMatch;

	winningTeam: string;

	getWinningTeam() : string{
		if(this.match.teamAGoals > this.match.teamBGoals) {
			return this.match.teamA
		}
		if(this.match.teamBGoals > this.match.teamAGoals) {
			return this.match.teamB
		}
	}
	ngOnInit(): void {
		this.winningTeam = this.getWinningTeam();
	}
}
