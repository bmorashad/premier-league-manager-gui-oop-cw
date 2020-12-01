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


	confirmGeneratedMatch(response: boolean) : void {
		if(response) {
			this.matchService.create(this.generatedMatch).
				subscribe(res => {
				if (res.status == 1) {
					this.matches = this.addMatch(this.generatedMatch);
					this.footballClubs = this.updateFootballClubsByMatch(this.generatedMatch)
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
	updateFootballClubsByMatch(match: IMatch): IFootballClub[] {
		const clubsInMatch = this.getClubsByMatch(match) 
		let teamA: IFootballClub = null;
		let teamB: IFootballClub = null;
		if (match.teamA == clubsInMatch[0].clubName) {
			teamA = clubsInMatch[0]
			teamB = clubsInMatch[1]
		} else {
			teamA = clubsInMatch[1]
			teamB = clubsInMatch[0]
		}
		teamA = this.updateGoals(teamA, match.teamAGoals, match.teamBGoals)
		teamB = this.updateGoals(teamB, match.teamBGoals, match.teamAGoals)
		if (match.teamAGoals > match.teamBGoals) {
			teamA = this.incrementMatchCounts(teamA, 1);
			teamB = this.incrementMatchCounts(teamB, -1);
			teamA = this.incrementPoints(teamA, 3);
		} else if (match.teamAGoals < match.teamBGoals) {
			teamB = this.incrementMatchCounts(teamB, 1);
			teamA = this.incrementMatchCounts(teamA, -1);
			teamB = this.incrementPoints(teamB, 3);
		} else {
			teamB = this.incrementMatchCounts(teamB, 0);
			teamA = this.incrementMatchCounts(teamA, 0);
			teamB = this.incrementPoints(teamB, 1);
			teamA = this.incrementPoints(teamA, 1);
		}
		return this.updateClubsByMatch([teamA, teamB]);
	}
	updateClubsByMatch(clubs: IFootballClub[]) : IFootballClub[]{
		let teamA = clubs[0]
		let teamB = clubs[1]
		let updatedClubs = this.footballClubs
		.map(club => {
			if(club.clubName == clubs[0].clubName) {
				return clubs[0];
			} else if(club.clubName == clubs[1].clubName) {
				return clubs[1];
			} else {
				return club;
			}
		})
		return updatedClubs;
	}
	getClubsByMatch(match: IMatch): IFootballClub[] {
		let clubs = this.footballClubs.
			filter(club => {
			return club.clubName == match.teamA || club.clubName == match.teamB
		});
		return clubs
	}
	updateGoals(club: IFootballClub, goals: number, opponentGoals: number) {
		let {goalsScored, goalsAgainst, goalsDifference} = club;
		goalsScored += goals;
		goalsAgainst += opponentGoals;
		goalsDifference = goalsScored - goalsAgainst 
		let newClub = { ...club, goalsAgainst, goalsScored, goalsDifference}
		return newClub;
	}
	incrementMatchCounts(club: IFootballClub, victoryState: number) : IFootballClub{
		const matchCount = club.matchCount + 1;
		let winCount = club.winCount;
		let defeatCount = club.defeatCount;
		let drawCount = club.drawCount;
		if(victoryState == 1) {
			winCount += 1
		} else if(victoryState == -1) {
			defeatCount += 1
		} else {
			drawCount += 1;
		}
		return { ...club, matchCount, winCount, defeatCount, drawCount};
	}
	incrementPoints(club: IFootballClub, points: number): IFootballClub{
		const newPoints = club.points + points;
		return { ...club, points: newPoints}
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
			}
		})
	}




}
