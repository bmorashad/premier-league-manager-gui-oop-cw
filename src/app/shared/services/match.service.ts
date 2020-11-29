import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IMatch } from '../../dto/Match'
import { BASE_URL } from './env'
import { Observable } from 'rxjs';
import { response } from './types';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private model = 'match';
  constructor(private http: HttpClient) { }

	all() : Observable<response> {
		return this.http.get<response>(this.getUrl());
	}
	create(match: IMatch) : Observable<response> {
		return this.http.post<response>(this.getUrl(), match);
	}
	private getUrl(): string {
		return `${BASE_URL}${this.model}`;
	}
}
