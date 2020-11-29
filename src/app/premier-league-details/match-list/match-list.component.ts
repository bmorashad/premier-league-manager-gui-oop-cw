import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IMatch } from '../../dto/Match'

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, OnChanges {
	@Input() matches: IMatch[] = [];

	matchesByDate: IMatch[];
	pickedDate: Date = null;
	noMatches: string = "No Matches";
	noMatchesOnDate: string = "No matches have been played in the given date";

	onDatePick(date: Date) : void {
		this.changePickedDate(date);
		this.setMatchesByDate(this.getMatchesByDate(date));
	}
	changePickedDate(date: Date) : void {
		this.pickedDate = date;
	}
	setMatchesByDate(matches: IMatch[]) : void {
		this.matchesByDate = matches;
	}
	sortMatchesByDate(matches: IMatch[]) : IMatch[] {
		return this.matches.sort((m1 , m2) => Date.parse(m1.date) - Date.parse(m2.date));
	}
	getMatchesByDate(date: Date) : IMatch[] {
		if(date) {
			return this.matches.filter(match =>  {
				date.setHours(0, 0, 0, 0)
				return Date.parse(match.date) == date.getTime()
			});
		}
		return this.matches;
	}
	setNoMatches(reason: string) {
		this.noMatches = reason;
	}
	ngOnChanges() : void {
		this.matchesByDate = this.sortMatchesByDate(this.matches);
	}
	ngOnInit() : void {
		this.matchesByDate = this.sortMatchesByDate(this.matches);
	}

  constructor() { }


}
