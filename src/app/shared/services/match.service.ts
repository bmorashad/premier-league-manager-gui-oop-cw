import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IMatch } from '../../dto/Match'
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
	create(match: IMatch) : Observable<Response> {
		return this.http.post<Response>(this.getUrl(), match);
	}
	private getUrl(): string {
		return `${BASE_URL}${this.model}`;
	}
}
