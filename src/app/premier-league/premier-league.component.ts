import { Component, OnInit, Input } from '@angular/core';
import { IMatch } from '../dto/Match';
import { IFootballClub } from '../dto/FootballClub';

@Component({
	selector: 'premier-league',
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
	@Input() matches: IMatch[] = []
	@Input() footballClubs: IFootballClub[] = []

	onCloseError() : void {
		this.toggleGeneratedMatchError();
	}
	onMatchGenerate(match: IMatch) : void {
		this.generatedMatch = match;
		if(match == null) {
			this.setErrorMessage("not enough clubs to generate match");
			this.showErrorNotify()
			return;
			// return this.toggleGeneratedMatchError();
		}
		return this.toggleGeneratedMatchModal();
	}
	setErrorMessage(message: string) : void{
		this.errorMessage = message;
	}
	confirmGeneratedMatch(response: boolean) : void {
		if(response) {
			this.matches = this.addMatch(this.generatedMatch);
		}
		this.toggleGeneratedMatchModal()
	}
	showErrorNotify() {
		this.errorNotify = true;
	}
	toggleGeneratedMatchModal() {
		this.showGeneratedMatch = !this.showGeneratedMatch;
	}
	toggleGeneratedMatchError() { 
		this.showGeneratedMatchError = !this.showGeneratedMatchError;
	}
	addMatch(match: IMatch): IMatch[] {
		return [ ...this.matches, match];
	}
	ngOnInit(): void {
		console.log(this.matches)
	}

	constructor() { }



}
