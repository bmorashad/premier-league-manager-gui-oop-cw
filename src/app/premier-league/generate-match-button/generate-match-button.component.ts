import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFootballClub } from '../../dto/FootballClub'
import { IMatch } from '../../dto/Match'

@Component({
	selector: 'generate-match-button',
	templateUrl: './generate-match-button.component.html',
	styleUrls: ['./generate-match-button.component.css']
})
export class GenerateMatchButtonComponent {
	@Output() match = new EventEmitter<IMatch>();
	
	@Input() footballClubs: IFootballClub[] = [];
	@Input() season: string = "2020-2021";

	lastGeneratedMatch: IMatch;
	onClick() : void{
		let generatedMatch: IMatch = this.generateMatch();
		this.lastGeneratedMatch = generatedMatch;
		this.match.emit(generatedMatch);
	}
	generateMatch() : IMatch {
		const maxGoals = 20;
		if(this.footballClubs.length < 2) {
			console.error("Not Enough FootClubs")
			return null;
		}
		let [teamA ,teamB]: IFootballClub[] = this.generateTwoTeams(this.footballClubs)
		while(!this.isTeamDeferFromLastGeneratedMatch(teamA, teamB)) {
			[teamA, teamB] = this.generateTwoTeams(this.footballClubs);
		}
		let [teamAGoals, teamBGoals] = this.generateTwoGoals(maxGoals);
		if(!this.isGoalDeferFromLastGeneratedMatch(teamAGoals, teamBGoals)) {
			[teamAGoals, teamBGoals] = this.generateTwoGoals(maxGoals);
		}
		const date: string = this.generateDateBySeason(this.season);
		let match: IMatch =  {
			teamA: teamA.clubName,
			teamB: teamB.clubName,
			teamAGoals: teamAGoals,
			teamBGoals: teamBGoals,
			date: date
		}
		let [winningTeam, defeatedTeam] = this.getWinningAndLoosingTeam(match);
		return { ...match, winningTeam, defeatedTeam};
	}
	isTeamDeferFromLastGeneratedMatch(teamA: IFootballClub, teamB: IFootballClub): boolean {
		if(this.lastGeneratedMatch == undefined) {
			return true;
		}
		const isTeamAInLastMatch: boolean = teamA.clubName == this.lastGeneratedMatch.teamA || 
			teamA.clubName == this.lastGeneratedMatch.teamB
		const isTeamBInLastMatch: boolean = teamB.clubName == this.lastGeneratedMatch.teamA || 
			teamB.clubName == this.lastGeneratedMatch.teamB
		return !(isTeamAInLastMatch && isTeamBInLastMatch)
	}
	isGoalDeferFromLastGeneratedMatch(teamAGoals: number, teamBGoals: number): boolean {
		if(this.lastGeneratedMatch == undefined) {
			return true;
		}
		return !(teamAGoals == this.lastGeneratedMatch.teamAGoals && 
			teamBGoals == this.lastGeneratedMatch.teamBGoals)
	}
	getWinningAndLoosingTeam(match: IMatch): string[] {
		if(match.teamAGoals > match.teamBGoals) {
			return [match.teamA, match.teamB]
		} else if (match.teamAGoals < match.teamBGoals) {
			return [match.teamB, match.teamA]
		} else {
			return ["NONE", "NONE"]
		}
	}

	generateRandomInt(min: number, max: number) : number{
		return Math.floor((Math.random()*(max-(min-1)) + min))
	}
	generateTwoGoals(max: number) : number[]{
		return [this.generateGoal(max), this.generateGoal(max)]
	}
	generateGoal(max: number): number {
		const probability: number = this.generateRandomInt(0, 160);
		const fiveGoalsProbability: number = 140; 
		const tenGoalsProbability: number = 150; 
		const fifteenGoalsProbability: number = 155; 

		if(probability <= fiveGoalsProbability) {
			return this.generateRandomInt(0, 5);
		} else if(probability <=tenGoalsProbability) {
			return this.generateRandomInt(6, 10)
		} else if(probability <= fifteenGoalsProbability)  {
			return this.generateRandomInt(11, 15)
		} else {
			return this.generateRandomInt(15, max);
		}
	}
	generateTeam(footballClubs: IFootballClub[]) : IFootballClub {
		const numOfTeams: number = footballClubs.length;
		const teamA: IFootballClub = this.footballClubs[this.generateRandomInt(0, numOfTeams-1)]
		return teamA;

	}
	generateTwoTeams(footballClubs: IFootballClub[]) : IFootballClub[]{
		if(footballClubs.length > 1) {
			const teamA: IFootballClub = this.generateTeam(footballClubs);
			let teamB: IFootballClub = this.generateTeam(footballClubs);
			while(teamA.clubName == teamB.clubName) {
				teamB = this.generateTeam(footballClubs);
			}
			return [teamA, teamB];
		}
		console.error("Not enough teams");
		return []
	}
	generateDateBySeason(season: string): string {
		const firstYear: number = parseInt(season.split("-")[0]);
		const secondYear: number = parseInt(season.split("-")[1]);
		const matchYear: number = this.generateRandomInt(firstYear, secondYear);
		const matchMonth: number = this.generateRandomInt(1, 12);
		const matchDay: number = this.generateDay(matchYear, matchMonth)
		let matchDate: Date = new Date(matchYear, matchMonth, matchDay); 
		if(matchDate.getTime() < Date.now()) {
			return this.generateDateBySeason(season);
		}
		let month = matchDate.getMonth() + 1;
		return matchDate.getFullYear() + "-" + month + "-" + matchDate.getDate();
	}
	generateDay(year: number, month: number): number{
		const maxDaysForMonth: number = this.getMaxDaysForMonth(year, month);
		return this.generateRandomInt(1, maxDaysForMonth);
	}
	getMaxDaysForMonth(year: number, month: number): number {
		const monthWith31Days: number[] = [1, 3, 5, 7, 8, 10, 12]
		const monthWith30Days: number[] = [4, 6, 9, 11]
		if(month == 2) {
			if(this.isLeapYear(year)) {
				return 28;
			} else {
				return 29;
			}
		} else if(monthWith31Days.includes(month)) {
			return 31;
		} else if(monthWith30Days.includes(month)) {
			return 30;
		} else {
			throw new Error("invalid month");
		}
	}
	isLeapYear(year: number): boolean {
		let isLeapYear: boolean = false
		if(year % 2 == 0) {
			if(year % 100 == 0) {
				if(year % 400 == 0) {
					isLeapYear = true;
				} else {
					isLeapYear = false;
				}
			} else {
				isLeapYear = true;
			}
		}	
		return isLeapYear;
	}
	constructor() { }

}
