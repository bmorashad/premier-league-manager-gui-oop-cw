import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMatch } from '../dto/Match';
import { IFootballClub } from '../dto/FootballClub';
import {FootballClubService} from '../shared/services/football-club.service';
import {MatchService} from '../shared/services/match.service';
import {ModalService} from '../common-ui/modal/modal.service';
import {forkJoin} from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'premier-league',
	templateUrl: './premier-league.component.html',
	styleUrls: ['./premier-league.component.css'],
	animations: [
		trigger('slideIn', [
			transition('* => *', [
				style({transform: 'translateX(-30px)', opacity: '0'}),
				animate('0.2s', style({transform: 'translateX(0)', opacity: '1'}))
			])
		])
	]
})
export class PremierLeagueComponent implements OnInit {
	successNotify: boolean = false;
	successNotifyMessage: string = "";
	errorNotify: boolean = false;
	errorNotifyMessage: string = "";

	match = new EventEmitter<IMatch>()
	title: string = "Premier League Stats & Matches"

	footballClubs: IFootballClub[] = [];
	matches: IMatch[] = [];
	matchGeneratedTitle: string = "Match Generated Successfully"
	matchGenerateErrorTitle: string = "ERROR: Generating Match Failed :/"
	errorMessage: string = ""
	isRandomMatchLoading: boolean = false;
	isDataLoading: boolean = false;
	generatedMatch: IMatch = null;
	matchDate: Date = null;
	footballClubsSortBy: string = "POINTS"; 

	onSortByChange(event: any) {
		this.footballClubsSortBy = event.target.value.toUpperCase();
	}


	addMatch(match: IMatch): IMatch[] {
		return [ ...this.matches, match];
	}
	constructor(private footballClubService: FootballClubService, private matchService: MatchService, private modalService: ModalService) { }

	showErrorNotify(message: string) {
		this.errorNotifyMessage = message;
		this.errorNotify = true;
	}
	showSuccessNotify(message: string) {
		this.successNotifyMessage = message;
		this.successNotify = true;
	}
	setErrorMessage(message: string) : void{
		this.errorMessage = message;
	}
	toggleModal(id: string): void {
		this.modalService.toggle(id)
	}
	onRefresh(): void {
		this.isDataLoading = true;
		this.loadData()
		.subscribe(res => {
			const matchRes = res[0]
			const clubRes = res[1]
			if(matchRes.status == 1) {
				this.matches = matchRes.data.matches;
			}
			if(clubRes.status == 1) {
				this.footballClubs = clubRes.data.footballClubs;
			}
			this.showSuccessNotify("matches and football clubs re-loaded success")
			this.isDataLoading = false;
		}, () => {
			this.showErrorNotify("failed during loading data, something is wrong with server :/")
			this.isDataLoading = false;
		})
	}
	loadData() {
		const matches$ = this.loadMatches()
		const footballClubs$ = this.loadClubs()
		return forkJoin([matches$, footballClubs$])
	}
	loadMatches() {
		return this.matchService.all()
	}
	loadClubs() {
		return this.footballClubService.all()
	}
	ngOnInit(): void {
		this.isDataLoading = true;
		this.loadData()
		.subscribe(res => {
			const matchRes = res[0]
			const clubRes = res[1]
			if(matchRes.status == 1) {
				this.matches = matchRes.data.matches;
			}
			if(clubRes.status == 1) {
				this.footballClubs = clubRes.data.footballClubs;
			}
			this.isDataLoading = false;
		}, () => {
			this.showErrorNotify("failed during loading data, something is wrong with server :/")
			this.isDataLoading = false;
		})
	}


	onAddMatch() {
		this.isRandomMatchLoading = true;
		this.matchService.addRandomMatch()
		.subscribe(res => {
			if (res.status == 1) {
				let generatedMatch = res.data.match
				this.generatedMatch = generatedMatch
				this.matches = this.addMatch(generatedMatch)
				this.loadClubs().subscribe( res => {
					if(res.status == 1) {
						this.footballClubs = res.data.footballClubs
					}
				});
				this.toggleModal("match-success")
			} else {
				this.setErrorMessage(res.errorMessage);
				this.toggleModal("match-error")
			}
			this.isRandomMatchLoading = false;
		}, () => {
			this.showErrorNotify("something is wrong with server :/")
			this.isRandomMatchLoading = false;
		})
	}

	onDatePick(date: Date) {
		this.matchDate = date;
	}
}
