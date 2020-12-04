import { Component, Input, Output, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations'
@Component({
	selector: 'snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.css'],
	animations: [
		trigger('popOverState', [
			state('show', style({
				transform: 'translateY(0)',
				opacity: '1',
				visibility: 'visible' 
			})),
			state('hide', style({
				transform: 'translateY(-100%)',
				opacity: '0',
				visibility: 'hidden' 
			})),
			transition('hide => show', animate('100ms ease-in') ),
			transition('show => hide', animate('100ms ease-out'))
		])
	]
})
export class SnackbarComponent implements OnChanges, OnDestroy{
	defaultType: string = "info";
	@Input() type: string = this.defaultType;
	@Input() show: boolean = false;
	@Output() showChange = new EventEmitter<boolean>();
	availableTypes: string[] = ["info", "success", "error"];
	timer: ReturnType<typeof setTimeout>;

	get showState() {
		return this.show ? 'show' : 'hide'
	}
	onClick(): void {
		this.clearTimer();
		this.hideBar();
	}
	ngOnChanges() {
		this.clearTimer();
		if(this.show) { this.timer = setTimeout(() => this.hideBar(), 3000)

		}
	}
	hideBar() {
		this.show = !this.show 
		this.showChange.emit(this.show);
	}
	clearTimer() {
		if(this.timer) {
			clearTimeout(this.timer)
		}
	}
	ngOnDestroy() {
		this.clearTimer();
	}
	constructor() { }


}
