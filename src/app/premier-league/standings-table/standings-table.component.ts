import { Component, Input, OnInit } from '@angular/core';
import { IFootballClub } from '../../dto/FootballClub';

@Component({
	selector: 'standings-table',
	templateUrl: './standings-table.component.html',
	styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit{
	@Input() footballClubs: IFootballClub[] = [];
	@Input() _id: string;
	defaultSort: string = "POINTS";

	fields: string[] = ["Club", "MP", "W", "D", "L", "GS", "GA", "GF", "Pts"]

	ngOnInit() : void {
		this.sortClubs(this.footballClubs, this.defaultSort);
	}
	onSortByChange(event: any) {
		this.sortClubs(this.footballClubs, event.target.value.toUpperCase());
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
