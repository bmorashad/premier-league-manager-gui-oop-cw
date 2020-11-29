import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IFootballClub } from '../../dto/FootballClub'
import { BASE_URL } from './env'
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FootballClubService {
  private model = 'footballclub';

	all() : Observable<any>{
		return this.http.get<any>(this.getUrl());
	}
	private getUrl(): string {
		return `${BASE_URL}${this.model}`;
	}
	constructor(private http: HttpClient) { }
}
