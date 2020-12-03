import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMatch } from '../dto/Match';
import { IFootballClub } from '../dto/FootballClub';
import {FootballClubService} from '../shared/services/football-club.service';
import {MatchService} from '../shared/services/match.service';
import {ModalService} from '../common-ui/modal/modal.service';

@Component({
	selector: 'premier-league-details',
	templateUrl: './premier-league-details.component.html',
	styleUrls: ['./premier-league-details.component.css']
})
export class PremierLeagueDetailsComponent implements OnInit {
	@Output() match = new EventEmitter<IMatch>()
	title: string = "Premier League Stats & Matches"
	errorNotify: boolean = false;
	errorNotifyMessage: string = "";
	successNotify: boolean = false;
	successMessage: string = "match created successfully";
	footballClubs: IFootballClub[] = [];
	matches: IMatch[] = [];
	matchGeneratedTitle: string = "Match Generated Successfully"
	matchGenerateErrorTitle: string = "ERROR: Generating Match Failed :/"
	errorMessage: string = ""
	isMatchGeneratingLoading: boolean = false;
	generatedMatch: IMatch = null;
	matchDate: Date = null;


	
	addMatch(match: IMatch): IMatch[] {
		return [ ...this.matches, match];
	}
	constructor(private footballClubService: FootballClubService, private matchService: MatchService, private modalService: ModalService) { }

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
		this.isMatchGeneratingLoading = true;
		this.matchService.addRandomMatch()
		.subscribe(res => {
			if (res.status == 1) {
				this.matches = this.addMatch(res.data.match)
				this.loadClubs();
				this.match.emit(res.data.match);
				return;
			} else {
				this.match.emit(null)
			}
		})
	}

	onDatePick(date: Date) {
		this.matchDate = date;
	}
}
