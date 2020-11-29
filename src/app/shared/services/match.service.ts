import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IMatch } from '../../dto/Match'
import { BASE_URL } from './env'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private model = 'match';
  constructor(private http: HttpClient) { }

	// all() : Observable<IMatch[]> {
		// return this.http.get<IMatch[]>(this.getUrl());
	// }
	all() : Observable<any> {
		return this.http.get<any>(this.getUrl());
	}
	private getUrl(): string {
		return `${BASE_URL}${this.model}`;
	}
}
