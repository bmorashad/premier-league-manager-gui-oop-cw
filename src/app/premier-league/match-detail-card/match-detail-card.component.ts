import { Component, OnInit, Input } from '@angular/core';
import { IMatch } from '../../dto/Match'

@Component({
	selector: 'match-detail-card',
	templateUrl: './match-detail-card.component.html',
	styleUrls: ['./match-detail-card.component.css']
})
export class MatchDetailCardComponent implements OnInit {
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
	constructor() { }


}
