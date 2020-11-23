import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IMatch } from '../../dto/Match'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
	private matches: IMatch[] = [
		{
			teamA: "FC Barcelona",
			teamB: "Liverpool",
			teamAGoals: 5,
			teamBGoals: 3,
			date: new Date(2021, 5, 25)
		},
		{
			teamA: "Arsenal",
			teamB: "Liverpool",
			teamAGoals: 5,
			teamBGoals: 6,
			date: new Date(2021, 5, 25)
		},
		{
			teamA: "FC Barcelona",
			teamB: "Liverpool",
			teamAGoals: 8,
			teamBGoals: 8,
			date: new Date(2021, 5, 25)
		}
	]

	getAllMatches() : IMatch[] {
		return this.matches
	}
  constructor(http: HttpClient) { }
}
