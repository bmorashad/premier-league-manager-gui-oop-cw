import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BASE_URL } from './env'
import { Observable } from 'rxjs';
import { Response } from './types';

@Injectable({
	providedIn: 'root'
})
export class FootballClubService {
  private model = 'football-club';

	all() : Observable<Response>{
		return this.http.get<Response>(this.getUrl());
	}
	private getUrl(): string {
		return `${BASE_URL}${this.model}`;
	}
	constructor(private http: HttpClient) { }
}
