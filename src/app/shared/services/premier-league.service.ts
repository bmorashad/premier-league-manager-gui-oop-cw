import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { BASE_URL } from './env'
import { Response } from './types';

@Injectable({
  providedIn: 'root'
})
export class PremierLeagueService {

	getSeason() : Observable<Response>{
		return this.http.get<Response>(`${BASE_URL}season`)
	}
  constructor(private http: HttpClient) { }
}
