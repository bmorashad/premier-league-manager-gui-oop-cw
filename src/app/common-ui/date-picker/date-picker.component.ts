import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'date-picker',
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
	@Output() pick = new EventEmitter<Date>();

	backspace: string = "Backspace"
	onKeyDown(event: any) {
		if(event.key == this.backspace) {
			event.target.value = null
		}
	}
	onChange(event: any): void {
		if(event.target.value) {
			this.pick.emit(new Date(event.target.value));
			return
		}
		this.pick.emit(null);
	}
	onClear(): void {
		
	}

	constructor() { }


}
