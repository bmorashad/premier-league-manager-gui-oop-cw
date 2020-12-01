import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BASE_URL } from './env'
import { Observable } from 'rxjs';
import { Response } from './types';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private model = 'match';
  constructor(private http: HttpClient) { }

	all() : Observable<Response> {
		return this.http.get<Response>(this.getUrl());
	}
	addRandomMatch() : Observable<Response> {
		return this.http.get<Response>(this.getUrl() + '/new/random');
	}
	private getUrl(): string {
		return `${BASE_URL}${this.model}`;
	}
}
