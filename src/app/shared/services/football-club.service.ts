import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BASE_URL } from './env'
import {Observable} from 'rxjs';
import {response} from './types';

@Injectable({
	providedIn: 'root'
})
export class FootballClubService {
  private model = 'football-club';

	all() : Observable<response>{
		return this.http.get<response>(this.getUrl());
	}
	private getUrl(): string {
		return `${BASE_URL}${this.model}`;
	}
	constructor(private http: HttpClient) { }
}
