import { Component, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
	selector: 'snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnChanges, OnDestroy{
	defaultType: string = "info";
	@Input() type: string = this.defaultType;
	@Input() show: boolean = false;
	availableTypes: string[] = ["info", "success", "error"];
	timer: ReturnType<typeof setTimeout>;

	onClick(): void {
		this.show = !this.show
	}
	ngOnChanges() {
		if(this.timer) {
			clearTimeout(this.timer)
		}
		if(this.show) {
			this.timer = setTimeout(() => this.show = !this.show, 2000)
		}
	}
	ngOnDestroy() {
		clearTimeout(this.timer)
	}
	constructor() { }


}
