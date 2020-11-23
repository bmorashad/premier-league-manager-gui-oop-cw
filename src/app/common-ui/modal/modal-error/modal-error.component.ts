import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
	selector: 'modal-error',
	templateUrl: './modal-error.component.html',
	styleUrls: ['./modal-error.component.css', '../modal.component.css']
})
export class ModalErrorComponent extends ModalComponent{
	@Output() response = new EventEmitter<boolean>();

	constructor() { 
		super()
	}

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
