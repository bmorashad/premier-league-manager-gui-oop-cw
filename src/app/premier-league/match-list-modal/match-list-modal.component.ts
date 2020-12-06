import { Component, OnInit } from '@angular/core';
import {IMatch} from 'src/app/dto/Match';
import {Observable} from 'rxjs';
import {MatchListModalService} from './match-list-modal.service';
import {values} from './types';

@Component({
	selector: 'match-list-modal',
	templateUrl: './match-list-modal.component.html',
	styleUrls: ['./match-list-modal.component.css'],
})
export class MatchListModalComponent implements OnInit{
	open: boolean = false
	state: Observable<values>
	matches: IMatch[] = [];
	clubName: string = "";
	noMatchesMessage: string = "No Matches";
	constructor(private modalService: MatchListModalService) {}

	get openState() {
		return open ? 'show' : 'hide'
	}
	onClick(e: any) {
		const isContainer = e.target.classList.contains('match-list-modal')
		// const isWrapper = e.target.classList.contains('modal-wrapper')
		if(e.target.classList.contains("close")) {
			this.closeModal();
		} else if(isContainer) {
			this.closeModal();
		}
	}
	closeModal() {
		this.modalService.close();
	}
	ngOnInit() {
		this.state = this.modalService._watch();
		this.state.subscribe(state => {
			if(state[0] == "open") {
				let matches = state[1]
				this.clubName = state[2]
				this.matches = matches 
				this.open = true
				return
			}
			if(state[0] == "close") {
				this.open = false
				return
			}
		})
	}
}
