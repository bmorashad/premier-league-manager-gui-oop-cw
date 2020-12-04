import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMatch } from '../dto/Match';
import { IFootballClub } from '../dto/FootballClub';
import {FootballClubService} from '../shared/services/football-club.service';
import {MatchService} from '../shared/services/match.service';
import {ModalService} from '../common-ui/modal/modal.service';

@Component({
	selector: 'premier-league',
	templateUrl: './premier-league.component.html',
	styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent implements OnInit {
	// successNotify: boolean = false;
	// successMessage: string = "match created successfully";
	
	match = new EventEmitter<IMatch>()
	title: string = "Premier League Stats & Matches"
	errorNotify: boolean = false;
	errorNotifyMessage: string = "something has gone wrong in the server";

	footballClubs: IFootballClub[] = [];
	matches: IMatch[] = [];
	matchGeneratedTitle: string = "Match Generated Successfully"
	matchGenerateErrorTitle: string = "ERROR: Generating Match Failed :/"
	errorMessage: string = ""
	isRandomMatchLoading: boolean = false;
	generatedMatch: IMatch = null;
	matchDate: Date = null;


	
	addMatch(match: IMatch): IMatch[] {
		return [ ...this.matches, match];
	}
	constructor(private footballClubService: FootballClubService, private matchService: MatchService, private modalService: ModalService) { }

	showErrorNotify() {
		this.errorNotify = true;
	}
	// showSuccessNotify() {
		// this.successNotify = true;
	// }
	setErrorMessage(message: string) : void{
		this.errorMessage = message;
	}
	toggleModal(id: string): void {
		this.modalService.toggle(id)
	}
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


	onAddMatch() {
		this.toggleModal("match-success")
		this.isRandomMatchLoading = true;
		this.matchService.addRandomMatch()
		.subscribe(res => {
			if (res.status == 1) {
				let generatedMatch = res.data.match
				this.generatedMatch = generatedMatch
				this.matches = this.addMatch(generatedMatch)
				this.loadClubs();
				this.toggleModal("match-success")
			} else {
				this.setErrorMessage(res.errorMessage);
				this.toggleModal("match-error")
			}
			this.isRandomMatchLoading = false;
		}, () => {
			this.showErrorNotify()
			this.isRandomMatchLoading = false;
		})
	}

	onDatePick(date: Date) {
		this.matchDate = date;
	}
}
