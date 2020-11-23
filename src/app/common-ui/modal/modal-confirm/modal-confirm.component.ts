import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
	selector: 'modal-confirm',
	templateUrl: './modal-confirm.component.html',
	styleUrls: ['./modal-confirm.component.css', '../modal.component.css']
})
export class ModalConfirmComponent extends ModalComponent {
	@Output() response = new EventEmitter<boolean>();

	constructor() { 
		super();
	}
	onResponse(event: Event) {
		if(event.target == document.getElementById("confirm")) {
			this.onConfirm();
		} else if(event.target == document.getElementById("cancel")) {
			this.onCancel();
		} else if(event.target == document.querySelector(".modal-container")) {
			this.onCancel();
		}
	}
	onConfirm() {
		this.response.emit(true)
	}
	onCancel() {
		this.response.emit(false)
	}

}
