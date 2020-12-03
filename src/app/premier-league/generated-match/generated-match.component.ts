import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IMatch } from '../../dto/Match';

@Component({
	selector: 'generated-match',
	templateUrl: './generated-match.component.html',
	styleUrls: ['./generated-match.component.css']
})
export class GeneratedMatchComponent implements OnInit, OnChanges{
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
	ngOnChanges(): void {
		this.winningTeam = this.getWinningTeam();
	}

	ngOnInit(): void {
		this.winningTeam = this.getWinningTeam();
	}

	constructor() { }

}
