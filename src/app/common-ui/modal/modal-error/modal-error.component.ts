import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'modal-error',
	templateUrl: './modal-error.component.html',
	styleUrls: ['./modal-error.component.css', '../modal.css']
})
export class ModalErrorComponent {
	@Output() response = new EventEmitter<boolean>();
	@Input() title: string;

	constructor() { }

	onResponse(event: Event) {
		if(event.target == document.getElementById("confirm")) {
			this.onClose();
		} else if(event.target == document.getElementById("close")) {
			this.onClose();
		} 
	}
	onClose() {
		this.response.emit(false)
	}

}
