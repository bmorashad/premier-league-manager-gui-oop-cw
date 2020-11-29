import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMatch } from '../dto/Match';
import { IFootballClub } from '../dto/FootballClub';

@Component({
	selector: 'premier-league-details',
	templateUrl: './premier-league-details.component.html',
	styleUrls: ['./premier-league-details.component.css']
})
export class PremierLeagueDetailsComponent implements OnInit {
	@Input() matches: IMatch[] = []
	@Input() footballClubs: IFootballClub[] = []
	@Output() match = new EventEmitter<IMatch>();

	onMatchGenerate(match: IMatch) : void {
		this.match.emit(match);
	}
	ngOnInit(): void {
	}

	constructor() { }



}
