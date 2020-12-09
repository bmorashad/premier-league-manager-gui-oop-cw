import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'text-date-picker',
  templateUrl: './text-date-picker.component.html',
  styleUrls: ['./text-date-picker.component.css']
})
export class TextDatePickerComponent {
	icon: string = "../../../assets/icons/search.png";
	@Output() date = new EventEmitter<Date>();
	disableSearch: boolean = false; 
	dateFormatError: boolean = false
	errorMessage: string = "Check if date format is yyyy-mm-dd";
	onChange(dateString: string) {
		if(dateString.length == 0) {
			this.disableSearch = false
			return
		}
		if(this.isDateValid(dateString)) {
			this.disableSearch = false
			return
		}
		this.disableSearch = true
	}
	enableDateFormatError() {
		this.dateFormatError = true;
	}
	onFocusIn() {
		this.dateFormatError = false;
	}
	onFocusOut(dateString: string) {
		if(dateString.length == 0) {
			this.dateFormatError = false
			return
		}
		if(this.isDateValid(dateString)) {
			this.dateFormatError = false
			return
		}
		this.enableDateFormatError()
	}
	onKeyDown(event: any) {
		let date: string  = (<HTMLInputElement>document.getElementById("match-date-picker")).value
		if(event.key == "Enter") {
			if(date.length != 0 && !this.isDateValid(date)) {
				this.enableDateFormatError()
				return
			}
			this.onSearch()
		}
	}
	onSearch() {
		let date: string  = (<HTMLInputElement>document.getElementById("match-date-picker")).value
		if(date.length == 0) {
			return this.date.emit(null)
		}
		if(this.isDateValid(date)) {
			return this.date.emit(new Date(date))
		}
	}

	isDateValid(dateString: string): boolean {
		var regEx = /^\d{4}-\d{2}|\d{1}-\d{2}|\d{1}$/;
		if(!dateString.match(regEx)) {
			return false;
		}  // Invalid format
		let oneDigitMonth = dateString.match(/-\d{1}$/g)
		let oneDigitDay = dateString.match(/-\d{1}-/g)
		if (oneDigitMonth) {
			let month = oneDigitMonth[0][1].padStart(2, '0');
			dateString = dateString.replace(/-\d{1}$/g, `-${month}`)
		}
		if (oneDigitDay) {
			let day = oneDigitDay[0][1].padStart(2, '0');
			dateString = dateString.replace(/-\d{1}-/g, `-${day}-`)
		}   
		var d = new Date(dateString);
		var dNum = d.getTime();
		if(!dNum && dNum !== 0) {
			return false;
		} // NaN value, Invalid date

		if(d.toISOString().slice(0,10) === dateString) {
			return true;
		} else {
			return false
		}
	}

}
