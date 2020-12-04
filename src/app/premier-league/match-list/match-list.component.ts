import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IMatch } from '../../dto/Match'

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})

export class MatchListComponent {
	@Input() matches: IMatch[] = [];
	@Input() matchDate: Date = null;

	matchesByDate: IMatch[];
	noMatches: string = "No Matches";
	noMatchesOnDate: string = "No matches have been played in the given date";

	sortMatchesByDate(matches: IMatch[], order: string) : IMatch[] {
		if(order == "desc")
            return matches.sort((m1 , m2) => Date.parse(m2.date) - Date.parse(m1.date));
		else {
            return matches.sort((m1 , m2) => Date.parse(m1.date) - Date.parse(m2.date));
		}
	}
	setMatches(matches: IMatch[]) {
		this.matches = matches;
	}
	getMatchesByDate(date: Date) : IMatch[] {
		if(date) {
			return this.matches.filter(match =>  {
				return Date.parse(match.date) == date.getTime()
			});
		}
		return this.matches;
	}
	ngOnChanges() : void {
		let matchesByDate: IMatch[] = this.getMatchesByDate(this.matchDate);
		this.matchesByDate = this.sortMatchesByDate(matchesByDate, "desc");
	}
	ngOnInit() : void {
		let matchesByDate: IMatch[] = this.getMatchesByDate(this.matchDate);
		this.matchesByDate = this.sortMatchesByDate(matchesByDate, "desc");
	}
}
