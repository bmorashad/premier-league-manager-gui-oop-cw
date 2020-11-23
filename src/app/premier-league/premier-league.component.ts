import { Component, OnInit } from '@angular/core';
import { IMatch } from '../dto/Match';
import { IFootballClub } from '../dto/FootballClub';
import { FootballClubService } from '../shared/services/football-club.service'
import { MatchService } from '../shared/services/match.service'

@Component({
	selector: 'app-premier-league',
	templateUrl: './premier-league.component.html',
	styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent implements OnInit {
	errorNotify: boolean = false;
	matchGeneratedTitle: string = "Match generated successfully"
	matchGenerateErrorTitle: string = "ERROR: Generated Match Failed :/"
	errorMessage: string = ""
	generatedMatch: IMatch = null;
	showGeneratedMatch: boolean = false;
	showGeneratedMatchError: boolean = false;
	matches: IMatch[] = []
	footballClubs: IFootballClub[] = []

	onCloseError() : void {
		this.toggleGeneratedMatchError();
	}
	onMatchGenerate(match: IMatch) : void {
		this.generatedMatch = match;
		if(match == null) {
			this.setErrorMessage("not enough clubs to generate match");
			return this.toggleGeneratedMatchError();
		}
		this.showErrorNotify()
		return this.toggleGeneratedMatchModal();
	}
	setErrorMessage(message: string) : void{
		this.errorMessage = message;
	}
	confirmGeneratedMatch(response: boolean) : void {
		if(response) {
			this.addMatch(this.generatedMatch);
		}
		this.toggleGeneratedMatchModal()
	}
	showErrorNotify() {
		this.errorNotify = true;
		setTimeout(() => this.errorNotify = false, 2000)
	}
	toggleGeneratedMatchModal() {
		this.showGeneratedMatch = !this.showGeneratedMatch;
	}
	toggleGeneratedMatchError() { 
		this.showGeneratedMatchError = !this.showGeneratedMatchError;
	}
	addMatch(match: IMatch): void {
		this.matches.push(match);
	}
	loadMatches() {
		this.matches = this.matchService.getAllMatches()
	}
	loadClubs() {
		this.footballClubs = this.footballClubService.getAllFootballClubs()
	}
	ngOnInit(): void {
		this.loadClubs()
		this.loadMatches()
	}

	constructor(private footballClubService: FootballClubService, private matchService: MatchService) { }



}
