import { Component, Input, OnInit } from '@angular/core';
import { FootballClubService } from '../../shared/services/football-club.service';
import { MatchService } from '../../shared/services/match.service';
import {ModalService} from 'src/app/common-ui/modal/modal.service';
import { IMatch } from '../../dto/Match';
import { IFootballClub } from '../../dto/FootballClub';

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
				this.matches = res.data.matches;
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
