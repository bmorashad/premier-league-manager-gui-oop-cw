import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMatch } from '../dto/Match';
import { IFootballClub } from '../dto/FootballClub';
import {FootballClubService} from '../shared/services/football-club.service';
import {MatchService} from '../shared/services/match.service';
import {ModalService} from '../common-ui/modal/modal.service';
import { filter } from 'rxjs/operators'

@Component({
	selector: 'premier-league-details',
	templateUrl: './premier-league-details.component.html',
	styleUrls: ['./premier-league-details.component.css']
})
export class PremierLeagueDetailsComponent implements OnInit {
	footballClubs: IFootballClub[] = [];
	matches: IMatch[] = [];
	title: string = "Premier League Stats & Matches"
	matchGeneratedTitle: string = "Match Generated Successfully"
	matchGenerateErrorTitle: string = "ERROR: Generating Match Failed :/"
	errorMessage: string = ""
	isMatchGeneratingLoading: boolean = false;
	generatedMatch: IMatch = null;
	matchDate: Date = null;


	toggleModal(id: string): void {
		this.modalService.toggle(id)
	}
	addMatch(match: IMatch): IMatch[] {
		return [ ...this.matches, match];
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


	onAddMatch() {
		this.isMatchGeneratingLoading = true;
		this.matchService.addRandomMatch()
		.subscribe(res => {
			if (res.status == 1) {
				this.matches = this.addMatch(res.data.match)
				this.loadClubs();
				return;
			}
			// this.toggleModal("error")
		})
	}

	onDatePick(date: Date) {
		this.matchDate = date;
	}



}
