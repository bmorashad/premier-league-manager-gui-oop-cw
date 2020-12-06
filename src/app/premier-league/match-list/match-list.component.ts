import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IMatch } from '../../dto/Match'
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  animations: [
	  trigger('stagger', [
		  transition('* => *', [
			  query(':enter', [
				  style({transform: 'translateY(30px)', opacity: '0'}),
				  stagger(100, [animate('0.2s', style({transform: 'translateY(0)', opacity: '1'}))])
			  ], {optional: true})
		  ])
	  ])
  ]
})

export class MatchListComponent implements OnChanges, OnInit{
	@Input() matches: IMatch[] = [];
	@Input() matchDate: Date = null;

	matchesByDate: IMatch[];
	noMatches: string = "No Matches";
	noMatchesOnDate: string = "No matches have been played in the given date";

	sortMatchesByDate(matches: IMatch[]) : IMatch[] {
		return matches.sort((m1 , m2) => Date.parse(m1.date) - Date.parse(m2.date));
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
		return [...this.matches];
	}
	ngOnChanges() : void {
		let matchesByDate: IMatch[] = this.getMatchesByDate(this.matchDate);
		this.matchesByDate = this.sortMatchesByDate(matchesByDate);
	}
	ngOnInit() : void {
		let matchesByDate: IMatch[] = this.getMatchesByDate(this.matchDate);
		this.matchesByDate = this.sortMatchesByDate(matchesByDate);
	}
}
