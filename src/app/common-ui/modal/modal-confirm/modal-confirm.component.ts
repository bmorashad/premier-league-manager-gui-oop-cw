import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
	selector: 'modal-confirm',
	templateUrl: './modal-confirm.component.html',
	styleUrls: ['./modal-confirm.component.css', '../modal.css']
})
export class ModalConfirmComponent {
	@Output() response = new EventEmitter<boolean>();
	@Input() title: string;

	constructor() { }
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
