import { Component, OnInit } from '@angular/core';
import { FootballClubService } from '../../shared/services/football-club.service';
import { MatchService } from '../../shared/services/match.service';
import { IMatch } from '../../dto/Match';
import { IFootballClub } from '../../dto/FootballClub';

@Component({
  selector: 'app-professional-league',
  templateUrl: './professional-league.component.html',
  styleUrls: ['./professional-league.component.css']
})
export class ProfessionalLeagueComponent implements OnInit {
	errorNotify: boolean = false;
	errorNotifyMessage: string = "";
	successNotify: boolean = false;
	successMessage: string = "match created successfully";
	matchGeneratedTitle: string = "Match generated successfully"
	matchGenerateErrorTitle: string = "ERROR: Generated Match Failed :/"
	errorMessage: string = ""
	generatedMatch: IMatch = null;
	showGeneratedMatch: boolean = false;
	showGeneratedMatchError: boolean = false;

	footballClubs: IFootballClub[] = [];
	matches: IMatch[] = [];

	onCloseError() : void {
		this.toggleGeneratedMatchError();
	}
	onMatchGenerate(match: IMatch) : void {
		this.generatedMatch = match;
		if(match == null) {
			this.setErrorMessage("not enough clubs to generate match");
			return this.toggleGeneratedMatchError();
		}
		return this.toggleGeneratedMatchModal();
	}
	confirmGeneratedMatch(response: boolean) : void {
		if(response) {
			this.matchService.create(this.generatedMatch).
				subscribe(res => {
				if (res.status == 1) {
					this.matches = this.addMatch(this.generatedMatch);
					this.showSuccessNotify();
				} else  {
					if(res.status == 0) {
						this.setErrorNotifyMessage(res.errorMessage);
					}
					this.showErrorNotify();
				} }, () => {
					this.setErrorNotifyMessage("something went wrong on server!")
					this.showErrorNotify();
				});
		}
		this.toggleGeneratedMatchModal()
	}
	addMatch(match: IMatch): IMatch[] {
		return [ ...this.matches, match];
	}
	showErrorNotify() {
		this.errorNotify = true;
	}
	showSuccessNotify() {
		this.successNotify = true;
	}
	setErrorMessage(message: string) : void{
		this.errorMessage = message;
	}
	setErrorNotifyMessage(message: string) : void{
		this.errorNotifyMessage = message;
	}
	// close or open
	toggleGeneratedMatchModal() {
		this.showGeneratedMatch = !this.showGeneratedMatch;
	}
	toggleGeneratedMatchError() { 
		this.showGeneratedMatchError = !this.showGeneratedMatchError;
	}
	constructor(private footballClubService: FootballClubService, private matchService: MatchService) { }

  loadMatches() {
	  this.matchService.all()
      .subscribe(res => {
		  if(res.status == 1) {
			  console.log(res);
			  this.matches = res.data.matches;
			  console.log(this.matches);
		  }
	  });
  }
  loadClubs() {
	  this.footballClubService.all()
      .subscribe(res => {
		  if(res.status == 1) {
			  this.footballClubs = res.data.footballClubs;
		  }
	  });
  }

  ngOnInit(): void {
	  this.loadMatches()
	  this.loadClubs()
  }

}
