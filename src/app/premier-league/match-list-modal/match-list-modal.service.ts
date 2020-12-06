import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IMatch} from 'src/app/dto/Match';
import { values } from './types'

@Injectable({
	providedIn: 'root'
})
export class MatchListModalService {
	state: Subject<values> = new Subject();

	_watch(): Observable<values> {
		return this.state.asObservable();
	}
	close(): void {
		this.state.next(["close"])
	}
	open(matches: IMatch[], clubName: string): void {
		this.state.next(["open", matches, clubName])
	}
	constructor() { }
}
