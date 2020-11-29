import { Component, OnInit } from '@angular/core';
import { FootballClubService } from '../../shared/services/football-club.service';
import { MatchService } from '../../shared/services/match.service';
import { IMatch } from '../../dto/Match';
import { IFootballClub } from '../../dto/FootballClub';
import {ModalService} from 'src/app/common-ui/modal/modal.service';

@Component({
	selector: 'app-premier-league',
	templateUrl: './premier-league.component.html',
	styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent implements OnInit {
	title: string = "Premier League"
	errorNotify: boolean = false;
	errorNotifyMessage: string = "";
	successNotify: boolean = false;
	successMessage: string = "match created successfully";
	matchGeneratedTitle: string = "Match generated successfully"
	matchGenerateErrorTitle: string = "ERROR: Generated Match Failed :/"
	errorMessage: string = ""
	generatedMatch: IMatch = null;

	footballClubs: IFootballClub[] = [];
	matches: IMatch[] = [];

	onMatchGenerate(match: IMatch) : void {
		this.generatedMatch = match;
		if(match == null) {
			this.setErrorMessage("not enough clubs to generate match");
			return this.toggleModal("match-error")
		}
		return this.toggleModal("match-confirm")
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
						this.setErrorNotifyMessage(res.errorMessage + ", try refreshing");
					}
					this.showErrorNotify();
				} }, () => {
					this.setErrorNotifyMessage("something went wrong on server!")
					this.showErrorNotify();
				});
		}
		return this.toggleModal("match-confirm")
	}
	toggleModal(id: string): void {
		this.modalService.toggle(id)
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
	constructor(private footballClubService: FootballClubService, private matchService: MatchService, private modalService: ModalService) { }

	onRefresh(): void {
		this.loadData()
	}
	loadData() {
		this.loadMatches();
		this.loadClubs();
	}
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
		this.loadData();
	}

}
