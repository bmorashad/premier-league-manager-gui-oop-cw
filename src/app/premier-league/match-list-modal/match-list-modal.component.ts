import { Component, OnInit } from '@angular/core';
import {IMatch} from 'src/app/dto/Match';
import {Observable} from 'rxjs';
import {MatchListModalService} from './match-list-modal.service';
import {values} from './types';
import { trigger, style, animate, transition, query, stagger, state, group, animateChild } from '@angular/animations';

@Component({
	selector: 'match-list-modal',
	templateUrl: './match-list-modal.component.html',
	styleUrls: ['./match-list-modal.component.css'],
	animations: [
		trigger('fadeIn', [
			state('show', style({
				visibility: 'visible',
				opacity: '1',
			})),
			state('hide', style({
				visibility: 'hidden',
				opacity: '0',
				transition: 'visibility 0s, opacity 0.5s linear'
			})),
			transition('hide <=> show', [
				group([
					query('@popOver, @popOut', [
						animateChild()
					]),
					animate('150ms 40ms ease-in')
				])
			])
		]),
		trigger('popOver', [
			state('show', style({
				transform: 'translateY(0)',
				opacity: '1',
			})),
			state('hide', style({
				transform: 'translateY(30%)',
				opacity: '0'
			})),
			transition('hide => show', animate('150ms ease-in') ),
		]),
		trigger('popOut', [
			state('show', style({
				transform: 'translateY(0)',
				opacity: '1',
			})),
			state('hide', style({
				transform: 'translateY(30%)',
				opacity: '0'
			})),
			transition('show => hide', animate('150ms ease-out') ),
		])
	]
})
export class MatchListModalComponent implements OnInit{
	show: boolean = false
	state: Observable<values>
	matches: IMatch[] = [];
	clubName: string = "";
	noMatchesMessage: string = "No Matches";
	constructor(private modalService: MatchListModalService) {}
	get showState() {
		return this.show ? 'show' : 'hide'
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
				this.show = true
				return
			}
			if(state[0] == "close") {
				this.show = false
				return
			}
		})
	}
}
