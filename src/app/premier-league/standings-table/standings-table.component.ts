import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IFootballClub } from '../../dto/FootballClub';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import {IMatch} from 'src/app/dto/Match';

@Component({
	selector: 'standings-table',
	templateUrl: './standings-table.component.html',
	styleUrls: ['./standings-table.component.css'],
	animations: [
		trigger('stagger', [
			transition('* => *', [
				query(':enter', [
					style({opacity: '0'}),
					stagger(50, [animate('0.4s', style({opacity: '1'}))])
				], {optional: true})
			])
		])
	]
})
export class StandingsTableComponent implements OnInit, OnChanges{
	@Input() footballClubs: IFootballClub[] = [];
	@Input() matches: IMatch[] = [];
	@Input() _id: string;
	@Input() sortBy: string = "POINTS";

	fields: string[] = ["Club", "MP", "W", "D", "L", "GS", "GA", "GF", "Pts", "Form"]

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

	isClubInMatch(match: IMatch, footballClub: IFootballClub) {
		return match.teamA == footballClub.clubName || 
			match.teamB == footballClub.clubName
	}
	getMatchesByClub(footballClub: IFootballClub, limit ?: number): IMatch[] {
		let matches = [...this.matches];
		matches.sort((m1, m2) => Date.parse(m2.date) - Date.parse(m1.date))
		const matchesPlayed: IMatch[] = [];
		let count: number = 1;
		for (var i = 0; i < matches.length; i++) {
			const match: IMatch = matches[i]
			if(this.isClubInMatch(match, footballClub)) {
				matchesPlayed.push(match)
				count += 1
			}
			if(limit) {
				if(count > limit) {
					break
				}
			}
		}
		return matchesPlayed;
	}
	isMatchDraw(match: IMatch): boolean {
		return match.teamAGoals == match.teamBGoals
	}
	isTeamWon(match: IMatch, footballClub: IFootballClub): boolean {
		return this.getWinningTeam(match) == footballClub.clubName
	}
	getWinningTeam(match: IMatch) : string{
		if(match.teamAGoals > match.teamBGoals) {
			return match.teamA
		}
		if(match.teamBGoals > match.teamAGoals) {
			return match.teamB
		}
		return "";
	}
	getClubGoals(match: IMatch, footballClub: IFootballClub) {
		if(match.teamA == footballClub.clubName) {
			return match.teamAGoals
		}
		if(match.teamB == footballClub.clubName) {
			return match.teamBGoals
		}
		return -1
	}
	getOpponentGoals(match: IMatch, footballClub: IFootballClub): number {
		if(match.teamA == footballClub.clubName) {
			return match.teamBGoals
		}
		if(match.teamB == footballClub.clubName) {
			return match.teamAGoals
		}
		return -1
	}
	getOpponentClubName(match: IMatch, footballClub: IFootballClub): string {
		if(match.teamA == footballClub.clubName) {
			return match.teamB
		}
		if(match.teamB == footballClub.clubName) {
			return match.teamA
		}
		return ""
	}
	constructor() { }


}
