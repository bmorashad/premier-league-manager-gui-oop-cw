import { Component, Input, OnInit } from '@angular/core';
import { IMatch } from '../../dto/Match'

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
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
		return this.matches.sort((m1 , m2) => m1.date.getTime() - m2.date.getTime());
	}
	getMatchesByDate(date: Date) : IMatch[] {
		if(date) {
			return this.matches.filter(match =>  {
				match.date.setHours(0, 0, 0, 0)
				date.setHours(0, 0, 0, 0)
				return match.date.getTime() == date.getTime()
			});
		}
		return this.matches;
	}
	setNoMatches(reason: string) {
		this.noMatches = reason;
	}
	ngOnInit() : void {
		this.matchesByDate = this.sortMatchesByDate(this.matches);
	}

  constructor() { }


}
