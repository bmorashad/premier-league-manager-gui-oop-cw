import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IFootballClub } from '../../dto/FootballClub';

@Component({
	selector: 'standings-table',
	templateUrl: './standings-table.component.html',
	styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit, OnChanges{
	@Input() footballClubs: IFootballClub[] = [];
	@Input() _id: string;
	@Input() sortBy: string = "POINTS";

	fields: string[] = ["Club", "MP", "W", "D", "L", "GS", "GA", "GF", "Pts"]

	ngOnInit() : void {
		this.sortClubs(this.footballClubs, this.sortBy);
	}
	ngOnChanges() : void {
		this.sortClubs(this.footballClubs, this.sortBy);
	}
	sortClubs(footballClubs: IFootballClub[], sortBy: string) : void{
		if(sortBy == "POINTS") {
			this.footballClubs = this.sortClubsByPoints(footballClubs);
		} else if (sortBy == "GOALS") {
			this.footballClubs = this.sortClubsByGoals(footballClubs);
		} else if (sortBy == "MATCHES") {
			this.footballClubs = this.sortClubsByMatches(footballClubs);
		} else {
			console.error("Give option doesn't exist:" + sortBy)
		}
	}
	sortClubsByPoints(footballClubs: IFootballClub[]) : IFootballClub[] {
			return footballClubs.sort((clubA, clubB) => clubB.points - clubA.points)
	}
	sortClubsByGoals(footballClubs: IFootballClub[]) : IFootballClub[] {
			return footballClubs.sort((clubA, clubB) => clubB.goalsScored - clubA.goalsScored)
	}
	sortClubsByMatches(footballClubs: IFootballClub[]) : IFootballClub[] {
			return footballClubs.sort((clubA, clubB) => clubB.matchCount - clubA.matchCount)
	}
	constructor() { }


}
