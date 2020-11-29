import { Component, Input, Output, OnChanges, OnDestroy, EventEmitter } from '@angular/core';

@Component({
	selector: 'snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnChanges, OnDestroy{
	defaultType: string = "info";
	@Input() type: string = this.defaultType;
	@Input() show: boolean = false;
	@Output() showChange = new EventEmitter<boolean>();
	availableTypes: string[] = ["info", "success", "error"];
	timer: ReturnType<typeof setTimeout>;

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
