import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IFootballClub } from '../../dto/FootballClub'

@Injectable({
	providedIn: 'root'
})
export class FootballClubService {

	private footballClubs: IFootballClub[] = [
		{
			clubName: "FC Barcelona",
			matchCount: 5,
			winCount: 3,
			defeatedCount: 1,
			drawCount: 1,
			goalsScored: 6,
			goalsAgainst: 2,
			goalDifference: 4,
			points: 9,
		},
		{
			clubName: "Arsenal",
			matchCount: 6,
			winCount: 4,
			defeatedCount: 1,
			drawCount: 1,
			goalsScored: 4,
			goalsAgainst: 2,
			goalDifference: 4,
			points: 12,
		},
		{
			clubName: "Liverpool",
			matchCount: 2,
			winCount: 3,
			defeatedCount: 1,
			drawCount: 1,
			goalsScored: 8,
			goalsAgainst: 2,
			goalDifference: 4,
			points: 4,
		}
	]

	getAllFootballClubs() : IFootballClub[]{
		return this.footballClubs
	}
	constructor(private http: HttpClient) { }
}
